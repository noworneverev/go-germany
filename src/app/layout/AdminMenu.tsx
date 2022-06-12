import {
  Tooltip,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
} from '@mui/material';
import React from 'react';
import { signOut } from '../../features/account/accountSlice';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { useTranslation } from 'react-i18next';
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store/configureStore';
import { User } from '../models/user';

interface Props {
  user: User | null;
}

export default function AdminMenu({ user }: Props) {
  let navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      {/* <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}> */}
      <Tooltip title={t('admin')}>
        <IconButton onClick={handleClick} color="inherit">
          <AdminPanelSettingsIcon />
        </IconButton>
      </Tooltip>
      {/* </Box> */}
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
      >
        {user ? (
          <MenuItem
            onClick={() => {
              dispatch(signOut());
              navigate('/');
            }}
          >
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
      </Menu>
    </>
  );
}
