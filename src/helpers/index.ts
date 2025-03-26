export const formatNumber = (locale: string, value: number) => {
  const numberFormatter = new Intl.NumberFormat(locale, {
    style: 'unit',
    unit: 'kilometer',
    unitDisplay: 'short',
    maximumFractionDigits: 0,
  });

  return numberFormatter.format(value);
};
