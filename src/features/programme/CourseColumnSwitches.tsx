import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import {
  Box,
  Button,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';

interface Props {
  columnState: {
    programme: boolean;
    language: boolean;
    courseType: boolean;
    subject: boolean;
    university: boolean;
    tu9: boolean;
    u15: boolean;
    article: boolean;
  };
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeAll: (show: boolean) => void;
}

export default function CourseColumnSwitches({
  columnState,
  handleChange,
  handleChangeAll,
}: Props) {
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
        startIcon={<ViewColumnIcon />}
      >
        {t('columns')}
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
        <MenuList dense>
          <MenuItem>
            <FormControlLabel
              control={
                <Switch
                  checked={columnState.programme}
                  onChange={handleChange}
                  name="programme"
                  size="small"
                />
              }
              label={t('course_name')}
            />
          </MenuItem>
          <MenuItem>
            <ListItemText>
              <FormControlLabel
                control={
                  <Switch
                    checked={columnState.language}
                    onChange={handleChange}
                    name="language"
                    size="small"
                  />
                }
                label={t('course_language')}
              />
            </ListItemText>
          </MenuItem>

          <MenuItem>
            <ListItemText>
              <FormControlLabel
                control={
                  <Switch
                    checked={columnState.courseType}
                    onChange={handleChange}
                    name="courseType"
                    size="small"
                  />
                }
                label={t('course_type')}
              />
            </ListItemText>
          </MenuItem>

          <MenuItem>
            <ListItemText>
              <FormControlLabel
                control={
                  <Switch
                    checked={columnState.subject}
                    onChange={handleChange}
                    name="subject"
                    size="small"
                  />
                }
                label={t('subject')}
              />
            </ListItemText>
          </MenuItem>

          <MenuItem>
            <ListItemText>
              <FormControlLabel
                control={
                  <Switch
                    checked={columnState.university}
                    onChange={handleChange}
                    name="university"
                    size="small"
                  />
                }
                label={t('university_name')}
              />
            </ListItemText>
          </MenuItem>

          <MenuItem>
            <ListItemText>
              <FormControlLabel
                control={
                  <Switch
                    checked={columnState.tu9}
                    onChange={handleChange}
                    name="tu9"
                    size="small"
                  />
                }
                label="TU9"
              />
            </ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemText>
              <FormControlLabel
                control={
                  <Switch
                    checked={columnState.u15}
                    onChange={handleChange}
                    name="u15"
                    size="small"
                  />
                }
                label="U15"
              />
            </ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemText>
              <FormControlLabel
                control={
                  <Switch
                    checked={columnState.article}
                    onChange={handleChange}
                    name="article"
                    size="small"
                  />
                }
                label={t('article')}
              />
            </ListItemText>
          </MenuItem>
        </MenuList>
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{ ml: 0.5, mr: 0.5 }}
        >
          <Button onClick={() => handleChangeAll(false)}>
            {t('hide_all')}
          </Button>
          <Button onClick={() => handleChangeAll(true)}>{t('show_all')}</Button>
        </Box>
      </Menu>
    </>
  );
}
