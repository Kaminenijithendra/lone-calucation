import React from 'react';
import { Container, Typography } from '@mui/material';
import LoanCalculator from '../components/LoanCalculator';

const HomePage = () => {
  return (
    <Container>
      {/* Welcome message */}
      <Typography variant="h4" gutterBottom>
        Welcome, Jithendra jithu  !
      </Typography>
      
      {/* Loan Calculator Component */}
      <LoanCalculator />
    </Container>
  );
};

export default HomePage;
