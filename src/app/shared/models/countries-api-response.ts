export interface CountryApi {
  name: {
    common: string;
    nativeName: object;
    official: string;
  };
  currencies: object;
}
