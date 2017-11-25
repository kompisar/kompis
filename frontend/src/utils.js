/* eslint-disable import/prefer-default-export */
export const formatEUR = (value) => (
  parseFloat(value).toLocaleString('en', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    currency: 'EUR',
    style: 'currency',
  })
);
