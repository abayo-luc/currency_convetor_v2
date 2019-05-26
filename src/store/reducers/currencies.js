import {
  CHANGE_CURRENCY_AMOUNT,
  SWAP_CURRENCY,
  CHANGE_BASE_CURRENCY,
  CHANGE_QUOTE_CURRENCY,
  GET_INITIAL_CONVERSION,
  CONVERSION_RESULTS,
  CONVERSION_ERROR
} from '../types';
import { setConversions } from '../../utils/helpers';

const INITIAL_STATE = {
  baseCurrency: 'USD',
  quoteCurrency: 'GBP',
  amount: 1,
  conversions: {},
  error: null
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CHANGE_CURRENCY_AMOUNT:
      return {
        ...state,
        amount: payload || 0
      };
    case SWAP_CURRENCY:
      return {
        ...state,
        baseCurrency: state.quoteCurrency,
        quoteCurrency: state.baseCurrency
      };
    case CHANGE_BASE_CURRENCY:
      return {
        ...state,
        baseCurrency: payload,
        conversions: setConversions(state, payload)
      };
    case CHANGE_QUOTE_CURRENCY:
      return {
        ...state,
        quoteCurrency: payload,
        conversions: setConversions(state, payload)
      };
    case GET_INITIAL_CONVERSION:
      return {
        ...state,
        conversions: setConversions(state, state.baseCurrency)
      };
    case CONVERSION_RESULTS:
      return {
        ...state,
        baseCurrency: payload.base,
        conversions: {
          ...state.conversions,
          [payload.base]: {
            isFetching: false,
            ...payload
          }
        }
      };
    case CONVERSION_ERROR: {
      return {
        ...state,
        error: payload
      };
    }
    default:
      return state;
  }
};
