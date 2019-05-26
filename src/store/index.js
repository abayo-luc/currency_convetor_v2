import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import logger from 'redux-logger';
import createSage from 'redux-saga';
import rootSage from '../config/sagas';

const sagaMiddleware = createSage();

const middleware = [sagaMiddleware];
if (process.env.NODE_EN !== 'production') {
  middleware.push(logger);
}
const store = createStore(reducers, applyMiddleware(...middleware));

sagaMiddleware.run(rootSage);

export default store;
