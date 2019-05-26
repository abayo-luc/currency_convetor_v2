import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Navigator from './config/routes';
import store from './store';

EStyleSheet.build({
  $primaryBlue: '#4F697A',
  $primaryOrange: '#D57A66',
  $primaryGreen: '#00BD9D',
  $primaryPurple: '#9E768F',
  $primaryDark: '#000000',
  $white: '#fff',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $lightGray: '#F0F0F0',
  $darkText: '#343434'
});
export default () => (
  <Provider store={store.store}>
    <PersistGate loading={null} persistor={store.persistor}>
      <Navigator />
    </PersistGate>
  </Provider>
);
