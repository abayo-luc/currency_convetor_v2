import {
  CHANGE_CURRENCY_AMOUNT,
  SWAP_CURRENCY,
  GET_INITIAL_CONVERSION,
  CHANGE_QUOTE_CURRENCY,
  CHANGE_BASE_CURRENCY
} from '../types';

export const swapCurrency = () => ({
  type: SWAP_CURRENCY
});

export const changeCurrencyAmount = payload => ({
  type: CHANGE_CURRENCY_AMOUNT,
  payload: parseFloat(payload)
});

export const changeCurrency = (type, currency) => {
  if (type === 'base') {
    return {
      type: CHANGE_BASE_CURRENCY,
      payload: currency
    };
  } else if (type === 'quote') {
    return {
      type: CHANGE_QUOTE_CURRENCY,
      payload: currency
    };
  }
};

export const getInitialConversions = () => ({
  type: GET_INITIAL_CONVERSION
});
