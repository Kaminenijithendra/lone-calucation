export function calculateEMI(principal, annualRate, months) {
    const r = annualRate / (12 * 100);
    return ((principal * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1)).toFixed(2);
  }
  