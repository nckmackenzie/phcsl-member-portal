export const formatCurrency = value =>
  new Intl.NumberFormat('en', { style: 'currency', currency: 'Ksh' }).format(
    value
  );

export function capitalizeEveryWord(str) {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}
