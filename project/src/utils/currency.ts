interface CurrencyConfig {
  code: string;
  symbol: string;
  position: 'before' | 'after';
}

interface CountryCurrency {
  [key: string]: CurrencyConfig;
}

export const countryCurrencies: CountryCurrency = {
  // African Nations
  NG: { code: 'NGN', symbol: '₦', position: 'before' },
  GH: { code: 'GHS', symbol: 'GH₵', position: 'before' },
  ZA: { code: 'ZAR', symbol: 'R', position: 'before' },
  KE: { code: 'KES', symbol: 'KSh', position: 'before' },
  EG: { code: 'EGP', symbol: 'E£', position: 'before' },
  MA: { code: 'MAD', symbol: 'MAD', position: 'before' },
  ET: { code: 'ETB', symbol: 'Br', position: 'before' },
  TZ: { code: 'TZS', symbol: 'TSh', position: 'before' },
  UG: { code: 'UGX', symbol: 'USh', position: 'before' },
  RW: { code: 'RWF', symbol: 'RF', position: 'before' },
  // Other Major Markets
  US: { code: 'USD', symbol: '$', position: 'before' },
  GB: { code: 'GBP', symbol: '£', position: 'before' },
  CA: { code: 'CAD', symbol: 'CA$', position: 'before' },
  AU: { code: 'AUD', symbol: 'A$', position: 'before' },
  DE: { code: 'EUR', symbol: '€', position: 'after' },
  FR: { code: 'EUR', symbol: '€', position: 'after' },
  JP: { code: 'JPY', symbol: '¥', position: 'before' },
  BR: { code: 'BRL', symbol: 'R$', position: 'before' },
  IN: { code: 'INR', symbol: '₹', position: 'before' },
  SG: { code: 'SGD', symbol: 'S$', position: 'before' },
};

export function formatCurrency(amount: number, countryCode: string): string {
  const currency = countryCurrencies[countryCode] || countryCurrencies.US;
  const formattedAmount = amount.toLocaleString(undefined, {
    minimumFractionDigits: currency.code === 'UGX' || currency.code === 'RWF' ? 0 : 2,
    maximumFractionDigits: currency.code === 'UGX' || currency.code === 'RWF' ? 0 : 2,
  });

  return currency.position === 'before'
    ? `${currency.symbol}${formattedAmount}`
    : `${formattedAmount} ${currency.symbol}`;
}