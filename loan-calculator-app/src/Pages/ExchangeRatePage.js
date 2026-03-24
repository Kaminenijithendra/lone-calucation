import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import { fetchCurrencyRate } from '../services/currencyService';

const ExchangeRatePage = () => {
  const [rates, setRates] = useState(null);

  useEffect(() => {
    const getRates = async () => {
      try {
        const usdToEur = await fetchCurrencyRate('USD', 'EUR');
        const usdToInr = await fetchCurrencyRate('USD', 'INR');
        setRates({ USD_EUR: usdToEur, USD_INR: usdToInr });
      } catch (error) {
        console.error('Error fetching exchange rates', error);
      }
    };

    getRates();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Exchange Rates
      </Typography>
      {rates ? (
        <div>
          <Typography>USD to EUR: {rates.USD_EUR}</Typography>
          <Typography>USD to INR: {rates.USD_INR}</Typography>
        </div>
      ) : (
        <Typography>Loading exchange rates...</Typography>
      )}
    </Container>
  );
};

export default ExchangeRatePage;
