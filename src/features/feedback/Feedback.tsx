import { Grid } from '@mui/material';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function Feedback() {
  const { t } = useTranslation();
  useEffect(() => {
    document.title = `${t('feedback')} | Go Germany`;
  }, [t]);
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={3}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSc8JEF-JuiPSSNvQFSTR8u-PeoOBjh4j5nSQAif7rENNbcOpg/viewform?embedded=true"
          width={640}
          height={1150}
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
        >
          載入中…
        </iframe>
      </Grid>
    </Grid>
  );
}
