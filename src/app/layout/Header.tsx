import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { useTranslation } from "react-i18next";
import LanguageMenu from "./LanguageMenu";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useAppDispatch, useAppSelector } from "../store/configureStore";
import {
  Badge,
  Link,
  List,
  ListItem,
  ListItemText,
  Stack,
  SvgIcon,
} from "@mui/material";
import { useEffect } from "react";
import {
  setBookmarkArticle,
  setBookmarkCourse,
} from "../../features/bookmark/bookmarkSlice";
import ScrollToOpacity from "../components/ScrollToOpacity";
import AdminMenu from "./AdminMenu";
import usePageTracking from "../hooks/usePageTracking";
import { ReactComponent as Dog } from "../../static/dog.svg";
import FeedbackIcon from "@mui/icons-material/Feedback";

interface Props {
  darkMode: boolean;
  handleThemeChange: () => void;
}

// const pages = ['Products', 'Pricing'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = ({ darkMode, handleThemeChange }: Props) => {
  usePageTracking();
  let navigate = useNavigate();
  let { pathname } = useLocation();
  const { t } = useTranslation();
  const { courses, articles } = useAppSelector((state) => state.bookmark);
  const { user } = useAppSelector((state) => state.account);
  const dispatch = useAppDispatch();
  const pages = [
    {
      index: 0,
      page: t("programme_header"),
      path: "/programme",
      isAdmin: false,
    },
    {
      index: 1,
      page: t("article_header"),
      path: "/article",
      isAdmin: false,
    },
    {
      index: 2,
      page: t("termin"),
      path: "/termin",
      isAdmin: false,
    },
    {
      index: 3,
      page: t("faq"),
      path: "/faq",
      isAdmin: false,
    },
    // {
    //   index: 4,
    //   page: t("feedback"),
    //   path: "/feedback",
    //   isAdmin: false,
    // },
    {
      index: 4,
      page: t("about"),
      path: "/about",
      isAdmin: false,
    },
    {
      index: 5,
      page: t("admin"),
      path: "/admin",
      isAdmin: true,
    },
  ];
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavClick = (event: any, path: string) => {
    setAnchorElNav(null);
    navigate(path);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [selectedIndex, setSelectedIndex] = React.useState(-1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
    path: string
  ) => {
    setSelectedIndex(index);
    navigate(path);
  };

  useEffect(() => {
    const localStorageCourse = localStorage.getItem("course");
    const localStorageArticle = localStorage.getItem("article");
    if (localStorageCourse) {
      dispatch(setBookmarkCourse(JSON.parse(localStorageCourse)));
    }
    if (localStorageArticle) {
      dispatch(setBookmarkArticle(JSON.parse(localStorageArticle)));
    }

    const currentPage = pages.find((x) => x.path === pathname);
    if (currentPage) {
      setSelectedIndex(currentPage.index);
    } else {
      setSelectedIndex(-1);
    }
  }, []);

  return (
    <ScrollToOpacity darkMode={darkMode}>
      <AppBar
        color="inherit"
        position="sticky"
        sx={{
          maxHeight: "60px",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <SvgIcon
              component={Dog}
              inheritViewBox
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
            {/* <ExploreIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
            <Typography
              variant="h6"
              noWrap
              component={RouterLink}
              to="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: "0.05rem",
                color: "inherit",
                textDecoration: "none",
              }}
              onClick={() => setSelectedIndex(-1)}
            >
              Go Germany
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map(({ page, path, isAdmin }) => {
                  if (user || !isAdmin) {
                    return (
                      <MenuItem
                        key={page}
                        onClick={(event) => handleNavClick(event, path)}
                      >
                        <Typography textAlign="center">{page}</Typography>
                      </MenuItem>
                    );
                  }
                })}
                <LanguageMenu />
                {/* <AdminMenu user={user} /> */}
              </Menu>
            </Box>
            <SvgIcon
              component={Dog}
              inheritViewBox
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            />
            {/* <ExploreIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
            <Typography
              variant="h5"
              noWrap
              component={RouterLink}
              to="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: "0.05rem",
                color: "inherit",
                textDecoration: "none",
              }}
              onClick={() => setSelectedIndex(-1)}
            >
              Go Germany
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <List
                component={Stack}
                direction="row"
                sx={{
                  "& .MuiButtonBase-root": {
                    paddingTop: 0,
                    paddingBottom: 0,
                  },
                }}
              >
                {pages.map(({ page, path, isAdmin, index }) => {
                  if (user || !isAdmin) {
                    return (
                      <ListItem
                        key={page}
                        component={RouterLink}
                        to={path}
                        button
                        sx={{
                          borderRadius: 2,
                        }}
                        selected={selectedIndex === index}
                        onClick={() => setSelectedIndex(index)}
                      >
                        {/* <ListItemButton
                          key={page}
                          selected={selectedIndex === index}
                          onClick={(event) =>
                            handleListItemClick(event, index, path)
                          }
                          sx={{ borderRadius: 2 }}
                        > */}
                        <ListItemText
                          primary={page}
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        />
                        {/* </ListItemButton> */}
                      </ListItem>

                      // <Button
                      //   key={page}
                      //   // onClick={(event) => handleNavClick(event, path)}
                      //   color="inherit"
                      //   sx={{ my: 2, display: 'block', textTransform: 'none' }}
                      //   component={RouterLink}
                      //   to={path}
                      // >
                      //   {page}
                      // </Button>
                    );
                  }
                })}
              </List>

              {/* {pages.map(({ page, path, isAdmin }) => {
                if (user || !isAdmin) {
                  return (
                    <Button
                      key={page}
                      // onClick={(event) => handleNavClick(event, path)}
                      color="inherit"
                      sx={{ my: 2, display: 'block', textTransform: 'none' }}
                      component={RouterLink}
                      to={path}
                    >
                      {page}
                    </Button>
                  );
                }
              })} */}
            </Box>

            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              <LanguageMenu />
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <IconButton
                component={RouterLink}
                to="/bookmark"
                sx={{ color: "inherit" }}
                onClick={() => setSelectedIndex(-1)}
              >
                <Badge
                  badgeContent={courses.length + articles.length}
                  color="secondary"
                >
                  <Tooltip title={t("bookmark_header")}>
                    <BookmarkIcon />
                  </Tooltip>
                </Badge>
              </IconButton>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Github repository">
                <Link
                  target="_blank"
                  href={"https://github.com/noworneverev/go-germany"}
                  underline="none"
                  color="inherit"
                >
                  <IconButton color="inherit">
                    <GitHubIcon />
                  </IconButton>
                </Link>
              </Tooltip>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <IconButton
                component={RouterLink}
                to="/feedback"
                sx={{ color: "inherit" }}
                onClick={() => setSelectedIndex(-1)}
              >
                <Tooltip title={t("feedback")}>
                  <FeedbackIcon />
                </Tooltip>
              </IconButton>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              {darkMode ? (
                <Tooltip title={t("darkmode")}>
                  <IconButton onClick={handleThemeChange} color="inherit">
                    <DarkModeOutlinedIcon />
                  </IconButton>
                </Tooltip>
              ) : (
                <Tooltip title={t("lightmode")}>
                  <IconButton onClick={handleThemeChange} color="inherit">
                    <LightModeOutlinedIcon />
                  </IconButton>
                </Tooltip>
              )}
            </Box>
            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              {user && <Typography sx={{ mx: 1 }}>Admin</Typography>}
            </Box>

            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              <AdminMenu user={user} />
            </Box>

            {/* <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
              <Tooltip title={t('admin')}>
                <IconButton onClick={handleClick} color="inherit">
                  <AdminPanelSettingsIcon />
                </IconButton>
              </Tooltip>
            </Box>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
            >
              {user ? (
                <MenuItem onClick={() => dispatch(signOut())}>
                  <ListItemIcon>
                    <LoginIcon fontSize="small" />
                  </ListItemIcon>
                  {t('logout')}
                </MenuItem>
              ) : (
                <MenuItem onClick={() => navigate('/login')}>
                  <ListItemIcon>
                    <LoginIcon fontSize="small" />
                  </ListItemIcon>
                  {t('login')}
                </MenuItem>
              )}
            </Menu> */}
          </Toolbar>
        </Container>
      </AppBar>
    </ScrollToOpacity>
  );
};
export default Header;
