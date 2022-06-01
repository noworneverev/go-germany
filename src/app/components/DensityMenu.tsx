import { Button, ListItemIcon, Menu, MenuItem, MenuList } from '@mui/material';
import React from 'react';
import TableRowsIcon from '@mui/icons-material/TableRows';
import { useTranslation } from 'react-i18next';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';

interface Props {
  dense: boolean;
  // handleChangeDense: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeDense: (dense: boolean) => void;
}

export default function DensityMenu({ dense, handleChangeDense }: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { t } = useTranslation();

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        startIcon={dense ? <ViewHeadlineIcon /> : <TableRowsIcon />}
      >
        {t('density')}
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
        <MenuList>
          <MenuItem
            selected={dense}
            onClick={() => {
              handleChangeDense(true);
              handleClose();
            }}
          >
            <ListItemIcon>
              <ViewHeadlineIcon />
            </ListItemIcon>
            {t('compact')}
          </MenuItem>

          <MenuItem
            selected={!dense}
            onClick={() => {
              handleChangeDense(false);
              handleClose();
            }}
          >
            <ListItemIcon>
              <TableRowsIcon />
            </ListItemIcon>

            {t('standard')}
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}
