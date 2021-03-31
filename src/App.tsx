import React from 'react';
import storage from './store';
import EStyleSheet from 'react-native-extended-stylesheet';
import { StatusBar } from 'react-native';
import AppNavigator from './_AppNavigator/AppNavigator';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { blackAndRedTheme } from '@constants';

EStyleSheet.build({
  ...blackAndRedTheme
});

const App: React.FC = () => {

  return (
    <Provider store={storage.store}>
      <PersistGate loading={null} persistor={storage.persistor}>
        <StatusBar backgroundColor="#142355" barStyle="default" />
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;