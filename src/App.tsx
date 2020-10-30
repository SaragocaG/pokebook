import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AppRouter from './AppRouter';
import { store, persistor } from './store/storeConfig';

const Redux = ({ children }: any) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  </Provider>
);

const App = () => (
  <Redux>
    <AppRouter />
  </Redux>
);

export default App;
