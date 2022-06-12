import { Container, Paper } from '@mui/material';
import { useEffect } from 'react';
import AdminTabs from './AdminTabs';

export default function AdminPage() {
  useEffect(() => {
    document.title = 'Admin | Go Germany';
  }, []);
  return (
    <Container component={Paper}>
      <AdminTabs />
    </Container>
  );
}
