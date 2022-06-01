import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CourseForm from './CourseForm';
import UniversityForm from './UniversityForm';
import ContentForm from './ContentForm';
import ArticleForm from './ArticleForm';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function AdminTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Content Form" {...a11yProps(0)} />
          <Tab label="Article Form" {...a11yProps(1)} />
          <Tab label="Course Form" {...a11yProps(2)} />
          <Tab label="University Form" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ContentForm />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ArticleForm />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CourseForm />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <UniversityForm />
      </TabPanel>
    </Box>
  );
}
