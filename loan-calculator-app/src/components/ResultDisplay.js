import React from 'react';
import { Box, Typography } from '@mui/material';

const ResultDisplay = ({ emi, currency, converted }) => (
  emi && (
    <Box mt={2}>
      <Typography>Your EMI: ${emi} USD</Typography>
      <Typography>In {currency}: {converted}</Typography>
    </Box>
  )
);

export default ResultDisplay;
