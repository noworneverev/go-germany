import { Container, Paper } from '@mui/material';
import React from 'react';
import AdminTabs from './AdminTabs';

export default function AdminPage() {
  return (
    <Container component={Paper}>
      <AdminTabs />
    </Container>
  );
}
