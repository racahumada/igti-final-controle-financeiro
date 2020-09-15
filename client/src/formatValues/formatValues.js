function formatNumber(value) {
  return value.toLocaleString('pt-BR', {
    maximumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL',
  });
}

export { formatNumber };
