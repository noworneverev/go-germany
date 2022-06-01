import {
  Box,
  Typography,
  Pagination,
  Button,
  Menu,
  MenuItem,
  Grid,
  Stack,
} from '@mui/material';
import { useState } from 'react';
import { MetaData } from '../models/pagination';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useTranslation } from 'react-i18next';

interface Props {
  metaData: MetaData;
  onPageNumberChange: (page: number) => void;
  onPageSizeChange: (pageSize: number) => void;
}

export default function AppPagination({
  metaData,
  onPageNumberChange,
  onPageSizeChange,
}: Props) {
  const { current_page, total_count, total_pages, page_size } = metaData;
  const [pageNumber, setPageNumber] = useState(current_page);
  const [pageSize, setPageSize] = useState(page_size);
  const { t } = useTranslation();

  function handlePageChange(page: number) {
    setPageNumber(page);
    onPageNumberChange(page);
  }

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // const handleMenuItemClick = (event: any, n: number) => {
  //   setAnchorEl(null);
  //   setPageSize(n);
  //   onPageSizeChange(n);
  // };

  function handleMenuItemClick(n: number) {
    setAnchorEl(null);
    setPageSize(n);
    onPageSizeChange(n);
  }

  function renderDisplayingCount() {
    if (total_count === 0) {
      return <Typography>{t('search_not_found')}</Typography>;
    } else {
      return (
        <Typography>
          {t('displaying')} {(current_page - 1) * page_size + 1}-
          {current_page * page_size > total_count
            ? total_count
            : current_page * page_size}{' '}
          {t('of')} {total_count} {t('items')}
        </Typography>
      );
    }
  }

  return (
    <Grid container>
      <Grid item lg={4} md={4} sm={12} xs={12}>
        <Box sx={{ mt: 0.7 }}>{renderDisplayingCount()}</Box>
      </Grid>

      <Grid
        item
        lg={8}
        md={8}
        sm={12}
        xs={12}
        display="flex"
        justifyContent={{ sm: 'left', md: 'right' }}
      >
        <Stack
          direction={{ xs: 'column', sm: 'column', md: 'row' }}
          justifyContent="flex-end"
        >
          <Stack direction="row">
            <Box sx={{ py: 0.7 }}>
              <Typography>{t('rows_per_page')}</Typography>
            </Box>
            <Box>
              <Button
                id="basic-button"
                onClick={handleClick}
                color="inherit"
                endIcon={<ArrowDropDownIcon />}
              >
                {pageSize}
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={() => handleMenuItemClick(10)}>10</MenuItem>
                <MenuItem onClick={() => handleMenuItemClick(15)}>15</MenuItem>
                <MenuItem onClick={() => handleMenuItemClick(25)}>25</MenuItem>
                <MenuItem onClick={() => handleMenuItemClick(50)}>50</MenuItem>
                <MenuItem onClick={() => handleMenuItemClick(100)}>
                  100
                </MenuItem>
              </Menu>
            </Box>
          </Stack>

          <Pagination
            color="standard"
            size="large"
            count={total_pages}
            page={pageNumber}
            shape="rounded"
            onChange={(e, page) => handlePageChange(page)}
          />
        </Stack>
      </Grid>
    </Grid>
  );
}
