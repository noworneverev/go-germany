import { useCallback, useEffect, useState } from "react";
import {
  Container,
  createTheme,
  CssBaseline,
  darkScrollbar,
  Fab,
  ThemeProvider,
} from "@mui/material";
import Header from "./Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Programme from "../../features/programme/Programme";
import Article from "../../features/article/Article";
import Footer from "./Footer";
import CourseDetails from "../../features/programme/CourseDetails";
import BookmarkPage from "../../features/bookmark/BookmarkPage";
import ArticleDetails from "../../features/article/ArticleDetails";
import Login from "../../features/account/Login";
import HomePage from "../../features/home/HomePage";
import { useAppDispatch } from "../store/configureStore";
import { setUser } from "../../features/account/accountSlice";
import AdminPage from "../../features/admin/AdminPage";
import PrivateRoute from "./PrivateRoute";
import Feedback from "../../features/feedback/Feedback";
import ScrollTop from "../components/ScrollTop";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Faq from "../../features/faq/Faq";
import Termin from "../../features/termin/Termin";
import About from "../../features/about/About";
// import ReactGA from 'react-ga4';

export default function App() {
  const dispatch = useAppDispatch();

  const initApp = useCallback(() => {
    try {
      dispatch(setUser(JSON.parse(localStorage.getItem("user")!)));
      // dispatch(fetchCurrentUser());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(setUser(JSON.parse(localStorage.getItem('user')!)));
  // }, [dispatch]);

  useEffect(() => {
    initApp();
  }, [initApp]);

  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? "dark" : "light";

  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        // default: paletteType === 'light' ? '#FFFFFF' : '#1B1B1D',
        default: paletteType === "light" ? "#eaeaea" : "#121212",
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: paletteType === "dark" ? darkScrollbar() : null,
        },
      },
    },
  });

  function handleThemeChange() {
    setDarkMode(!darkMode);
    localStorage.setItem("theme", darkMode ? "light" : "dark");
  }

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    setDarkMode(currentTheme === "dark");
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div id="back-to-top-anchor"></div>
      <ToastContainer position="bottom-right" hideProgressBar theme="colored" />

      {/* <Router basename={process.env.PUBLIC_URL}> */}
      <Router basename="/">
        <CssBaseline />
        <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
        <Container
          sx={{
            mt: 4,
            display: "flex",
            minHeight: "100vh",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
          maxWidth={false}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/programme" element={<Programme />} />
            <Route path="/programme/:id" element={<CourseDetails />} />
            <Route path="/article" element={<Article />} />
            <Route path="/article/:id" element={<ArticleDetails />} />
            <Route path="/bookmark" element={<BookmarkPage />} />
            <Route path="/termin" element={<Termin />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route path="/admin" element={<AdminPage />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Footer />

          <ScrollTop>
            <Fab
              size="small"
              aria-label="scroll back to top"
              sx={{
                backgroundColor:
                  theme.palette.mode === "dark" ? "#444950" : "#ebedf0",
                color:
                  theme.palette.mode === "dark"
                    ? theme.palette.grey[500]
                    : theme.palette.grey[700],
                "&.MuiFab-root:hover": {
                  bgcolor:
                    theme.palette.mode === "dark" ? "#606770" : "#dadde1",
                },
              }}
            >
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollTop>
        </Container>
      </Router>
    </ThemeProvider>
  );
}
