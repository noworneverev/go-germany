import {
  Chip,
  Box,
  Stack,
  Typography,
  styled,
  Link,
  Grid,
  Tooltip,
} from '@mui/material';
import React from 'react';

import { HtmlTooltip } from '../../app/components/HtmlTooltip';
import { Article } from '../../app/models/article';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';

interface Props {
  articles: Article[];
}

const StyledChip = styled(Chip)(({ theme }) => ({
  '&.MuiChip-outlined': {
    borderColor: theme.palette.action.disabled,
  },
}));

const StyledPttChip = styled(Chip)(({ theme }) => ({
  '&.MuiChip-outlined': {
    borderColor: theme.palette.action.disabled,
  },
}));

function renderSourceChip(source: string) {
  switch (source) {
    case 'FB':
    case 'Dcard':
      return (
        <Chip label={source} color="primary" size="small" sx={{ mr: 1 }} />
      );
    case 'PTT':
      return (
        <Chip
          label={source}
          size="small"
          sx={{ mr: 1, backgroundColor: '#000', color: '#fff' }}
        />
      );
    default:
      return (
        <Chip label={source} color="default" size="small" sx={{ mr: 1 }} />
      );
  }
}

export const renderResultChip = (result: string) => {
  switch (result) {
    case 'Admission':
      return <Chip label={result} size="small" color="success" />;
    case 'Rejection':
      return <Chip label={result} size="small" color="warning" />;
    default:
      return <Chip label={result} size="small" color="info" />;
  }
};

export default function ArticlesTooltip({ articles }: Props) {
  function renderOneArticle(article: Article, source: string = '') {
    let date = new Date(article.published_at);
    return (
      <HtmlTooltip
        key={article.id}
        title={
          <Box>
            <Stack spacing={0.5}>
              <Box display="flex" justifyContent="space-between">
                <Typography>{`${article.author}`}</Typography>

                {article.is_decision && (
                  <Tooltip title="Decision">
                    <LibraryAddCheckIcon />
                  </Tooltip>
                )}
              </Box>

              {article.published_at && (
                <Typography variant="inherit">
                  {`${date.toISOString().split('T')[0]}`}
                </Typography>
              )}

              {article.author_bs_school && (
                <Typography variant="inherit">
                  {article.author_bs_school}
                </Typography>
              )}

              {article.author_bs_department && (
                <Typography variant="inherit">
                  {article.author_bs_department}
                </Typography>
              )}

              {article.author_bs_gpa && (
                <>
                  <StyledChip
                    label={`GPA: ${article.author_bs_gpa}`}
                    size="small"
                    variant="outlined"
                  />
                </>
              )}
              {article.author_toefl && (
                <>
                  <StyledChip
                    label={`TOEFL: ${article.author_toefl}`}
                    size="small"
                    variant="outlined"
                  />
                </>
              )}
              {article.author_ielts && (
                <>
                  <StyledChip
                    label={`IELTS: ${article.author_ielts}`}
                    size="small"
                    variant="outlined"
                  />
                </>
              )}
              {article.author_gre && (
                <>
                  <StyledChip
                    label={`GRE: ${article.author_gre}`}
                    size="small"
                    variant="outlined"
                  />
                </>
              )}
              {article.author_gmat && (
                <>
                  <StyledChip
                    label={`GMAT: ${article.author_gmat}`}
                    size="small"
                    variant="outlined"
                  />
                </>
              )}
              {article.author_testdaf && (
                <>
                  <StyledChip
                    label={`TestDaF: ${article.author_testdaf}`}
                    size="small"
                    variant="outlined"
                  />
                </>
              )}
              {article.author_goethe && (
                <>
                  <StyledChip
                    label={`Goethe: ${article.author_goethe}`}
                    size="small"
                    variant="outlined"
                  />
                </>
              )}
              {renderResultChip(article.result)}
            </Stack>
          </Box>
        }
      >
        <div>
          {source && renderSourceChip(source)}
          <Link
            target="_blank"
            href={article.link}
            underline="hover"
            color="inherit"
          >
            {article.title}
          </Link>
        </div>
      </HtmlTooltip>
    );
  }

  function renderArticles(articles: Article[]) {
    if (!articles) return;

    return articles.map((article) => {
      switch (article.source) {
        case 'PTT':
          return renderOneArticle(article, 'PTT');
        case 'Dcard':
          return renderOneArticle(article, 'Dcard');
        case 'FB':
          return renderOneArticle(article, 'FB');
        case 'Medium':
          return renderOneArticle(article, 'Medium');
        case 'Blog':
          return renderOneArticle(article, 'Blog');
        default:
          break;
      }
      return renderOneArticle(article);
    });
  }

  return <>{renderArticles(articles)}</>;
}
