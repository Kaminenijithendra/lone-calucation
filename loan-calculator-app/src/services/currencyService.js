import axios from 'axios';

export async function fetchCurrencyRate(base = 'USD', target = 'USD') {
  try {
    const res = await axios.get(`https://open.er-api.com/v6/latest/${base}`);
    return res.data.rates[target] || 1;
  } catch (err) {
    console.error('Currency API error', err);
    return 1;
  }
}
