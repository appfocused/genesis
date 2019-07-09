type AssetType = 'Equity' | 'Mutual Fund';

export interface Asset {
  symbol: string;
  name: string;
  type: string;
  region: string;
  marketOpen: string;
  marketClose: string;
  timezone: string;
  currency: string;
  matchScore: string;
}

export interface AssetDTO {
  '1. symbol': string;
  '2. name': string;
  '3. type': AssetType;
  '4. region': string;
  '5. marketOpen': string;
  '6. marketClose': string;
  '7. timezone': string;
  '8. currency': string;
  '9. matchScore': string;
}
