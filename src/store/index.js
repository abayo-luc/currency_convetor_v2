import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducers from './reducers';
import logger from 'redux-logger';
import createSage from 'redux-saga';
import rootSage from '../config/sagas';

const sagaMiddleware = createSage();

const middleware = [sagaMiddleware];
if (process.env.NODE_EN !== 'production') {
  middleware.push(logger);
}

//redux-persist things
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['inputs']
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, applyMiddleware(...middleware));
const persistor = persistStore(store);
sagaMiddleware.run(rootSage);

export default { store, persistor };
