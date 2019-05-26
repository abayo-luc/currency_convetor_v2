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
