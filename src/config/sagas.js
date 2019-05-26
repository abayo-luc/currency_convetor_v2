/**
 * listen to these action
 * 1. swap currency
 * 2. Change base currency
 */
import { takeEvery, select, call, put } from 'redux-saga/effects';
import {
  GET_INITIAL_CONVERSION,
  SWAP_CURRENCY,
  CHANGE_BASE_CURRENCY,
  CONVERSION_ERROR,
  CONVERSION_RESULTS
} from '../store/types';
const BASE_URL = `https://api.exchangeratesapi.io/latest`;

const getLatestRate = currency => fetch(`${BASE_URL}?base=${currency}`);

function* fetchRates(action) {
  try {
    let currency = action.payload;
    if (currency === undefined) {
      currency = yield select(state => state.currencies.baseCurrency);
    }
    const response = yield call(getLatestRate, currency);
    const result = yield response.json();
    if (result.error) {
      yield put({ type: CONVERSION_ERROR, payload: results.error });
    } else {
      yield put({ type: CONVERSION_RESULTS, payload: result });
    }
  } catch (e) {
    yield put({ type: CONVERSION_ERROR, payload: e.message });
  }
}

export default function* rootSage() {
  yield takeEvery(GET_INITIAL_CONVERSION, fetchRates);
  yield takeEvery(SWAP_CURRENCY, fetchRates);
  yield takeEvery(CHANGE_BASE_CURRENCY, fetchRates);
}
