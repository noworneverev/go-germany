import { styled } from '@mui/material/styles';
import {
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableRow,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { Article } from '../../app/models/article';
import { useTranslation } from 'react-i18next';
import LaunchIcon from '@mui/icons-material/Launch';
import { renderDate } from '../../app/utils/utils';
import DensityMenu from '../../app/components/DensityMenu';
import { Box } from '@mui/system';

interface Props {
  article: Article;
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function ArticleDetailTable({ article }: Props) {
  const { t } = useTranslation();
  const [dense, setDense] = useState(false);
  const handleChangeDense = (dense: boolean) => {
    setDense(dense);
  };

  return (
    <Paper sx={{ padding: 2, borderRadius: 3, m: 1, mt: 2, boxShadow: 3 }}>
      <Box display="flex" justifyContent="space-between">
        <Typography color="text.secondary" variant="h5" gutterBottom>
          {t('article_info')}
        </Typography>
        <DensityMenu dense={dense} handleChangeDense={handleChangeDense} />
      </Box>

      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 700 }}
          aria-label="customized table"
          size={dense ? 'small' : 'medium'}
        >
          <TableBody>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                <Typography sx={{ fontWeight: 500 }}>{t('author')}</Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Typography>{article.author}</Typography>
              </StyledTableCell>
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                <Typography sx={{ fontWeight: 500 }}>{t('title')}</Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Typography>
                  <Link
                    target="_blank"
                    href={article.link}
                    underline="hover"
                    color="inherit"
                  >
                    {article.title}
                    <LaunchIcon fontSize="small" sx={{ ml: 1 }} />
                  </Link>
                </Typography>
              </StyledTableCell>
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                <Typography sx={{ fontWeight: 500 }}>
                  {t('published_date')}
                </Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Typography>{renderDate(article.published_at)}</Typography>
              </StyledTableCell>
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                <Typography sx={{ fontWeight: 500 }}>{t('source')}</Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Typography>{article.source}</Typography>
              </StyledTableCell>
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                <Typography sx={{ fontWeight: 500 }}>
                  {t('author_bs_school')}
                </Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Typography>{article.author_bs_school}</Typography>
              </StyledTableCell>
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                <Typography sx={{ fontWeight: 500 }}>
                  {t('author_bs_department')}
                </Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Typography>{article.author_bs_department}</Typography>
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                <Typography sx={{ fontWeight: 500 }}>
                  {t('author_bs_gpa')}
                </Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Typography>{article.author_bs_gpa}</Typography>
              </StyledTableCell>
            </StyledTableRow>
            {article.author_ms_school && (
              <>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    <Typography sx={{ fontWeight: 500 }}>
                      {t('author_ms_school')}
                    </Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography>{article.author_ms_school}</Typography>
                  </StyledTableCell>
                </StyledTableRow>

                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    <Typography sx={{ fontWeight: 500 }}>
                      {t('author_ms_department')}
                    </Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography>{article.author_ms_department}</Typography>
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    <Typography sx={{ fontWeight: 500 }}>
                      {t('author_ms_gpa')}
                    </Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography>{article.author_ms_gpa}</Typography>
                  </StyledTableCell>
                </StyledTableRow>
              </>
            )}
            {article.author_toefl && (
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  <Typography sx={{ fontWeight: 500 }}>{t('toefl')}</Typography>
                </StyledTableCell>
                <StyledTableCell>
                  <Typography>{article.author_toefl}</Typography>
                </StyledTableCell>
              </StyledTableRow>
            )}
            {article.author_ielts && (
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  <Typography sx={{ fontWeight: 500 }}>{t('ielts')}</Typography>
                </StyledTableCell>
                <StyledTableCell>
                  <Typography>{article.author_ielts}</Typography>
                </StyledTableCell>
              </StyledTableRow>
            )}
            {article.author_gre && (
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  <Typography sx={{ fontWeight: 500 }}>{t('gre')}</Typography>
                </StyledTableCell>
                <StyledTableCell>
                  <Typography>{article.author_gre}</Typography>
                </StyledTableCell>
              </StyledTableRow>
            )}
            {article.author_gmat && (
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  <Typography sx={{ fontWeight: 500 }}>{t('gmat')}</Typography>
                </StyledTableCell>
                <StyledTableCell>
                  <Typography>{article.author_gmat}</Typography>
                </StyledTableCell>
              </StyledTableRow>
            )}
            {article.author_testdaf && (
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  <Typography sx={{ fontWeight: 500 }}>
                    {t('testdaf')}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell>
                  <Typography>{article.author_testdaf}</Typography>
                </StyledTableCell>
              </StyledTableRow>
            )}
            {article.author_goethe && (
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  <Typography sx={{ fontWeight: 500 }}>
                    {t('goethe')}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell>
                  <Typography>{article.author_goethe}</Typography>
                </StyledTableCell>
              </StyledTableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
