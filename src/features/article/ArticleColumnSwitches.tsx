import React from 'react';
import { useTranslation } from 'react-i18next';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import {
  Box,
  Button,
  FormControlLabel,
  Menu,
  MenuItem,
  MenuList,
  Switch,
} from '@mui/material';

interface Props {
  columnState: {
    author: boolean;
    title: boolean;
    application: boolean;
    date: boolean;
    courseType: boolean;
    source: boolean;
    bsSchool: boolean;
    bsDepartment: boolean;
    bsGpa: boolean;
    msSchool: boolean;
    msDepartment: boolean;
    msGpa: boolean;
    toefl: boolean;
    ielts: boolean;
    gre: boolean;
    gmat: boolean;
    testdaf: boolean;
    goethe: boolean;
  };
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeAll: (show: boolean) => void;
}

export default function ArticleColumnSwitches({
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
                  checked={columnState.author}
                  onChange={handleChange}
                  name="author"
                  size="small"
                />
              }
              label={t('author')}
            />
          </MenuItem>
          <MenuItem>
            <FormControlLabel
              control={
                <Switch
                  checked={columnState.title}
                  onChange={handleChange}
                  name="title"
                  size="small"
                />
              }
              label={t('title')}
            />
          </MenuItem>
          <MenuItem>
            <FormControlLabel
              control={
                <Switch
                  checked={columnState.application}
                  onChange={handleChange}
                  name="application"
                  size="small"
                />
              }
              label={t('application')}
            />
          </MenuItem>
          <MenuItem>
            <FormControlLabel
              control={
                <Switch
                  checked={columnState.date}
                  onChange={handleChange}
                  name="date"
                  size="small"
                />
              }
              label={t('published_date')}
            />
          </MenuItem>
          <MenuItem>
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
          </MenuItem>
          <MenuItem>
            <FormControlLabel
              control={
                <Switch
                  checked={columnState.source}
                  onChange={handleChange}
                  name="source"
                  size="small"
                />
              }
              label={t('source')}
            />
          </MenuItem>
          <MenuItem>
            <FormControlLabel
              control={
                <Switch
                  checked={columnState.bsSchool}
                  onChange={handleChange}
                  name="bsSchool"
                  size="small"
                />
              }
              label={t('author_bs_school')}
            />
          </MenuItem>
          <MenuItem>
            <FormControlLabel
              control={
                <Switch
                  checked={columnState.bsDepartment}
                  onChange={handleChange}
                  name="bsDepartment"
                  size="small"
                />
              }
              label={t('author_bs_department')}
            />
          </MenuItem>
          <MenuItem>
            <FormControlLabel
              control={
                <Switch
                  checked={columnState.bsGpa}
                  onChange={handleChange}
                  name="bsGpa"
                  size="small"
                />
              }
              label={t('author_bs_gpa')}
            />
          </MenuItem>
          <MenuItem>
            <FormControlLabel
              control={
                <Switch
                  checked={columnState.msSchool}
                  onChange={handleChange}
                  name="msSchool"
                  size="small"
                />
              }
              label={t('author_ms_school')}
            />
          </MenuItem>
          <MenuItem>
            <FormControlLabel
              control={
                <Switch
                  checked={columnState.msDepartment}
                  onChange={handleChange}
                  name="msDepartment"
                  size="small"
                />
              }
              label={t('author_ms_department')}
            />
          </MenuItem>
          <MenuItem>
            <FormControlLabel
              control={
                <Switch
                  checked={columnState.msGpa}
                  onChange={handleChange}
                  name="msGpa"
                  size="small"
                />
              }
              label={t('author_ms_gpa')}
            />
          </MenuItem>
          <MenuItem>
            <FormControlLabel
              control={
                <Switch
                  checked={columnState.toefl}
                  onChange={handleChange}
                  name="toefl"
                  size="small"
                />
              }
              label={t('toefl')}
            />
          </MenuItem>
          <MenuItem>
            <FormControlLabel
              control={
                <Switch
                  checked={columnState.ielts}
                  onChange={handleChange}
                  name="ielts"
                  size="small"
                />
              }
              label={t('ielts')}
            />
          </MenuItem>
          <MenuItem>
            <FormControlLabel
              control={
                <Switch
                  checked={columnState.gre}
                  onChange={handleChange}
                  name="gre"
                  size="small"
                />
              }
              label={t('gre')}
            />
          </MenuItem>
          <MenuItem>
            <FormControlLabel
              control={
                <Switch
                  checked={columnState.gmat}
                  onChange={handleChange}
                  name="gmat"
                  size="small"
                />
              }
              label={t('gmat')}
            />
          </MenuItem>
          <MenuItem>
            <FormControlLabel
              control={
                <Switch
                  checked={columnState.testdaf}
                  onChange={handleChange}
                  name="testdaf"
                  size="small"
                />
              }
              label={t('testdaf')}
            />
          </MenuItem>
          <MenuItem>
            <FormControlLabel
              control={
                <Switch
                  checked={columnState.goethe}
                  onChange={handleChange}
                  name="goethe"
                  size="small"
                />
              }
              label={t('goethe')}
            />
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
