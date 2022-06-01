import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TranslateIcon from '@mui/icons-material/Translate';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';
import cookies from 'js-cookie';

const languages = [
  {
    code: 'en',
    name: 'English',
  },
  {
    code: 'de',
    name: 'Deutsch',
  },
  {
    code: 'zhTW',
    name: '中文（台灣）',
  },
];

export default function LanguageMenu() {
  const currentLanguageCode = cookies.get('i18next') || 'en';
  // const currentLanguage = languages.find((l) => l.code === currentLanguageCode);

  // const [selectedIndex, setSelectedIndex] = useState(0);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (
    event: React.MouseEvent<HTMLElement>,
    code: string
  ) => {
    // setSelectedIndex(index);
    i18next.changeLanguage(code);
    handleClose();
  };

  const { t } = useTranslation();

  return (
    <div>
      {/* <Button color="inherit" variant="text" startIcon={<TranslateIcon />}>
        English
      </Button> */}
      <Button
        color="inherit"
        variant="text"
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        // onMouseOver={handleClick}
        startIcon={<TranslateIcon />}
        endIcon={<ArrowDropDownIcon />}
      >
        {t('language')}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        // MenuListProps={{
        //   onMouseLeave: handleClose,
        // }}
      >
        {languages.map(({ code, name }) => (
          <MenuItem
            disabled={currentLanguageCode === code}
            key={code}
            onClick={(event) => handleLanguageChange(event, code)}
          >
            {name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
