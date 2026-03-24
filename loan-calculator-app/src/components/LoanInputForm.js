import React from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const LoanInputForm = ({ formData, onChange, onCalculate, currency, onCurrencyChange }) => (
  <>
    <TextField
      fullWidth
      margin="normal"
      label="Loan Amount"
      type="number"
      value={formData.amount}
      onChange={(e) => onChange('amount', e.target.value)}
    />
    <TextField
      fullWidth
      margin="normal"
      label="Interest Rate (Annual %)"
      type="number"
      value={formData.rate}
      onChange={(e) => onChange('rate', e.target.value)}
    />
    <TextField
      fullWidth
      margin="normal"
      label="Tenure (in Months)"
      type="number"
      value={formData.months}
      onChange={(e) => onChange('months', e.target.value)}
    />
    <FormControl fullWidth margin="normal">
      <InputLabel>Currency</InputLabel>
      <Select
        value={currency}
        label="Currency"
        onChange={(e) => onCurrencyChange(e.target.value)}
      >
        <MenuItem value="USD">USD</MenuItem>
        <MenuItem value="INR">INR</MenuItem>
        <MenuItem value="EUR">EUR</MenuItem>
        <MenuItem value="JPY">JPY</MenuItem>
      </Select>
    </FormControl>
    <Button variant="contained" onClick={onCalculate} fullWidth>
      Calculate EMI
    </Button>
  </>
);

export default LoanInputForm;