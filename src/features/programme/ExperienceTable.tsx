import {
  Paper,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  Box,
  TableBody,
  Stack,
  Chip,
} from "@mui/material";
import { useState } from "react";
import { Course } from "../../app/models/course";
import { renderResultChip } from "./ArticlesTooltip";
import LaunchIcon from "@mui/icons-material/Launch";
import { useTranslation } from "react-i18next";
import StyledTableCell from "../../app/components/StyledTableCell";
import StyledTableRow from "../../app/components/StyledTableRow";
import DensityMenu from "../../app/components/DensityMenu";
import { renderDate } from "../../app/utils/utils";
import StyledLink from "../../app/components/StyledLink";

interface Props {
  course: Course;
}

function isColmnNeeded(course: Course, columnName: string) {
  if (!course) return false;
  if (!course.articles) return false;

  for (let i = 0; i < course.articles.length; i++) {
    const article = course.articles[i];
    switch (columnName) {
      case "author_ms_school":
        if (article.author_ms_school) return true;
        break;
      case "author_toefl":
        if (article.author_toefl) return true;
        break;
      case "author_ielts":
        if (article.author_ielts) return true;
        break;
      case "author_gre":
        if (article.author_gre) return true;
        break;
      case "author_gmat":
        if (article.author_gmat) return true;
        break;
      case "author_testdaf":
        if (article.author_testdaf) return true;
        break;
      case "author_goethe":
        if (article.author_goethe) return true;
        break;
      default:
        break;
    }
  }
  return false;
}

export default function ExperienceTable({ course }: Props) {
  const { t } = useTranslation();
  const [dense, setDense] = useState(false);
  const handleChangeDense = (dense: boolean) => {
    setDense(dense);
  };

  return (
    <Paper sx={{ padding: 2, borderRadius: 3, m: 1, mt: 2, boxShadow: 3 }}>
      <Box display="flex" justifyContent="space-between">
        <Typography color="text.secondary" variant="h5" gutterBottom>
          {t("experience")}
        </Typography>
        <DensityMenu dense={dense} handleChangeDense={handleChangeDense} />
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} size={dense ? "small" : "medium"}>
          <TableHead>
            <TableRow>
              <StyledTableCell>{t("author")}</StyledTableCell>
              <StyledTableCell>
                <Box
                // sx={{
                //   display: 'flex',
                //   alignItems: 'center',
                //   flexWrap: 'wrap',
                // }}
                >
                  {t("title")}
                  <LaunchIcon fontSize="small" sx={{ ml: 1 }} />
                </Box>
              </StyledTableCell>
              <StyledTableCell>{t("result")}</StyledTableCell>
              <StyledTableCell>{t("published_date")}</StyledTableCell>
              <StyledTableCell>{t("source")}</StyledTableCell>
              <StyledTableCell>{t("author_bs_school")}</StyledTableCell>
              {/* <StyledTableCell>{t('author_bs_school_short')}</StyledTableCell> */}
              <StyledTableCell>{t("author_bs_department")}</StyledTableCell>
              <StyledTableCell>{t("author_bs_gpa")}</StyledTableCell>
              {isColmnNeeded(course, "author_ms_school") && (
                <>
                  <StyledTableCell>{t("author_ms_school")}</StyledTableCell>
                  {/* <StyledTableCell>
                      {t('author_ms_school_short')}
                    </StyledTableCell> */}
                  <StyledTableCell>{t("author_ms_department")}</StyledTableCell>
                  <StyledTableCell>{t("author_ms_gpa")}</StyledTableCell>
                </>
              )}
              {isColmnNeeded(course, "author_toefl") && (
                <StyledTableCell>{t("toefl")}</StyledTableCell>
              )}
              {isColmnNeeded(course, "author_ielts") && (
                <StyledTableCell>{t("ielts")}</StyledTableCell>
              )}

              {isColmnNeeded(course, "author_gre") && (
                <StyledTableCell>{t("gre")}</StyledTableCell>
              )}
              {isColmnNeeded(course, "author_gmat") && (
                <StyledTableCell>{t("gmat")}</StyledTableCell>
              )}
              {isColmnNeeded(course, "author_testdaf") && (
                <StyledTableCell>{t("testdaf")}</StyledTableCell>
              )}
              {isColmnNeeded(course, "author_goethe") && (
                <StyledTableCell>{t("goethe")}</StyledTableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {course &&
              course.articles &&
              course.articles.map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell component="th" scope="row">
                    {row.author}
                  </StyledTableCell>
                  <StyledTableCell>
                    <StyledLink href={row.link} text={row.title} />
                  </StyledTableCell>
                  <StyledTableCell>
                    <Stack spacing={0.5}>
                      {renderResultChip(row.result)}
                      {row.is_decision && (
                        <Chip
                          label="Decision"
                          size="small"
                          color="success"
                          variant="outlined"
                        />
                      )}
                    </Stack>
                  </StyledTableCell>
                  <StyledTableCell>
                    {renderDate(row.published_at)}
                  </StyledTableCell>
                  <StyledTableCell>{row.source}</StyledTableCell>
                  <StyledTableCell>{row.author_bs_school}</StyledTableCell>
                  {/* <StyledTableCell>
                      {row.author_bs_school_short}
                    </StyledTableCell> */}
                  <StyledTableCell>{row.author_bs_department}</StyledTableCell>
                  <StyledTableCell>{row.author_bs_gpa}</StyledTableCell>
                  {isColmnNeeded(course, "author_ms_school") && (
                    <>
                      <StyledTableCell>{row.author_ms_school}</StyledTableCell>
                      {/* <StyledTableCell>
                          {row.author_ms_school_short}
                        </StyledTableCell> */}
                      <StyledTableCell>
                        {row.author_ms_department}
                      </StyledTableCell>
                      <StyledTableCell>{row.author_ms_gpa}</StyledTableCell>
                    </>
                  )}
                  {isColmnNeeded(course, "author_toefl") && (
                    <StyledTableCell>{row.author_toefl}</StyledTableCell>
                  )}
                  {isColmnNeeded(course, "author_ielts") && (
                    <StyledTableCell>{row.author_ielts}</StyledTableCell>
                  )}

                  {isColmnNeeded(course, "author_gre") && (
                    <StyledTableCell>{row.author_gre}</StyledTableCell>
                  )}
                  {isColmnNeeded(course, "author_gmat") && (
                    <StyledTableCell>{row.author_gmat}</StyledTableCell>
                  )}
                  {isColmnNeeded(course, "author_testdaf") && (
                    <StyledTableCell>{row.author_testdaf}</StyledTableCell>
                  )}
                  {isColmnNeeded(course, "author_goethe") && (
                    <StyledTableCell>{row.author_goethe}</StyledTableCell>
                  )}
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
