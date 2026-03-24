import React from 'react';
import { Box, Typography, Switch } from '@mui/material';

const ThemeToggle = ({ onToggle }) => (
  <Box mt={3}>
    <Typography>Toggle Theme</Typography>
    <Switch onChange={onToggle} />
  </Box>
);

export default ThemeToggle;