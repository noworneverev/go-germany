import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { useTranslation } from "react-i18next";
import { Box } from "@mui/system";
import useCourses from "../../app/hooks/useCourses";
import AppPagination from "../../app/components/AppPagination";
import { setPageNumber } from "./programmeSlice";
import { useAppDispatch } from "../../app/store/configureStore";
import CourseTable from "./CourseTable";
import CourseFilters from "./CourseFilters";

export default function Programme() {
  const { t } = useTranslation();
  // const { pathname } = useLocation();

  // const [courses, setCourses] = useState<Course[]>([]);
  // const [pageNumber, setPageNumber] = useState(3);
  // const [pageSize, setPageSize] = useState(100);

  const { courses, coursesLoaded, metaData, filtersLoaded } = useCourses();
  const dispatch = useAppDispatch();

  const [expanded, setExpanded] = useState(true);
  // const handleChangeExpanded = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setExpanded(event.target.checked);
  // };

  useEffect(() => {
    document.title = `${t("programme_header")} | Go Germany`;
  }, [t]);

  // useEffect(() => {
  //   if (process.env.NODE_ENV === 'production')
  //     ReactGA.send({ hitType: 'pageview', page: pathname });
  // }, []);

  // useEffect(() => {
  //   const params = new URLSearchParams();
  //   params.append('pageNumber', pageNumber.toString());
  //   params.append('pageSize', pageSize.toString());

  //   agent.Courses.list(params)
  //     .then((response) => {
  //       setCourses(response.courses);
  //       setLoading(false);
  //     })
  //     .catch((error) => console.log(error));
  // }, [pageNumber, pageSize]);

  // if (!coursesLoaded) return <LoadingComponent message={t('loading')} />;
  if (!filtersLoaded) return <LoadingComponent message={t("loading")} />;

  return (
    <>
      <Grid container columnSpacing={2} rowSpacing={2}>
        {expanded && (
          <Grid item lg={2} md={2} xs={12}>
            <CourseFilters />
          </Grid>
        )}

        <Grid item lg={expanded ? 10 : 12} md={expanded ? 10 : 12} xs={12}>
          {/* <Grid item xs zeroMinWidth> */}
          <Paper sx={{ padding: 2, borderRadius: 3, boxShadow: 2 }}>
            <CourseTable
              courses={courses}
              coursesLoaded={coursesLoaded}
              metaData={metaData}
              expanded={expanded}
              setExpanded={setExpanded}
            />
            {metaData && (
              <Box sx={{ mt: 2 }}>
                <AppPagination
                  metaData={metaData}
                  onPageNumberChange={(page: number) =>
                    dispatch(setPageNumber({ pageNumber: page }))
                  }
                  onPageSizeChange={(pageSize: number) =>
                    dispatch(setPageNumber({ pageSize: pageSize }))
                  }
                />
              </Box>
            )}
          </Paper>
        </Grid>
      </Grid>
      {/* <Fab
        size="small"
        aria-label="collapsible panel"
        sx={{
          margin: 0,
          top: 'auto',
          right: 'auto',
          bottom: 20,
          left: 20,
          position: 'fixed',
        }}
        onClick={() => setExpanded(!expanded)}
        // sx={{
        //   backgroundColor:
        //     theme.palette.mode === 'dark' ? '#444950' : '#ebedf0',
        //   color:
        //     theme.palette.mode === 'dark'
        //       ? theme.palette.grey[500]
        //       : theme.palette.grey[700],
        //   '&.MuiFab-root:hover': {
        //     bgcolor:
        //       theme.palette.mode === 'dark' ? '#606770' : '#dadde1',
        //   },
        // }}
      >
        {expanded ? (
          <KeyboardDoubleArrowLeftIcon />
        ) : (
          <KeyboardDoubleArrowRightIcon />
        )}
      </Fab> */}
    </>
  );
}
