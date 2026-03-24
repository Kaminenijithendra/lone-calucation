import React, { useState, useContext, useEffect } from 'react';
import { Container, Typography, Box } from '@mui/material';
import { ColorModeContext } from '../context/ThemeToggleProvider';
import LoanInputForm from './LoanInputForm';
import ResultDisplay from './ResultDisplay';
import { calculateEMI } from '../utils/calculateEMI';
import { fetchCurrencyRate } from '../services/currencyService';

const LoanCalculator = () => {
  const [formData, setFormData] = useState({ amount: 50000, rate: 10, months: 12 });
  const [emi, setEmi] = useState(null);
  const [currency, setCurrency] = useState('USD');
  const [converted, setConverted] = useState(null);
  const { toggleColorMode } = useContext(ColorModeContext);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: +value }));
  };

  const handleCalculate = () => {
    const result = calculateEMI(formData.amount, formData.rate, formData.months);
    setEmi(result);
  };

  const handleCurrencyChange = (value) => {
    setCurrency(value);
  };

  useEffect(() => {
    const convert = async () => {
      if (emi) {
        const rate = await fetchCurrencyRate('USD', currency);
        setConverted((emi * rate).toFixed(2));
      }
    };
    convert();
  }, [emi, currency]);

  return (
    <Container maxWidth="sm">
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>
          Loan EMI Calculator
        </Typography>
        <LoanInputForm
          formData={formData}
          onChange={handleChange}
          onCalculate={handleCalculate}
          currency={currency}
          onCurrencyChange={handleCurrencyChange}
        />
        <ResultDisplay emi={emi} currency={currency} converted={converted} />
      </Box>
    </Container>
  );
};

export default LoanCalculator;