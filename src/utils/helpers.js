export const setConversions = (state, currency) => {
  let conversions = {
    isFetching: true,
    date: '',
    rates: {}
  };
  if (state.conversions[currency]) {
    conversions = state.conversions[currency];
  }
  return {
    ...state.conversions,
    [currency]: conversions
  };
};

export const toRgba = (hex, alpha = 0.1) => {
  const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};

export const filterCurrencies = (currencies = [], query = '') =>
  currencies.filter(currency => currency.includes(query));
