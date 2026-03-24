import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography, Switch, Box } from '@mui/material';
import { ColorModeContext } from '../context/ThemeToggleProvider'; // Update the path as needed

const NavigationBar = () => {
  const colorMode = useContext(ColorModeContext);

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Loan EMI Calculator
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button color="inherit" component={Link} to="/">
            HOME
          </Button>
          <Button color="inherit" component={Link} to="/exchange-rate">
            EXCHANGE RATES (LIVE)
          </Button>
          <Button color="inherit" component={Link} to="/about">
            ABOUT
          </Button>
          <Button color="inherit" component={Link} to="/error">
            ERROR PAGE
          </Button>
          <Switch onChange={colorMode.toggleColorMode} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
