import React from 'react';
import AppRouter from './AppRouter';
import { Provider } from 'react-redux';
import storeConfig from './store/storeConfig';

const store = storeConfig();

const Redux = ({ children }: any) => (
  <Provider store={store}>
    {children}
  </Provider>
);

const App = () => (
  <Redux>
    <AppRouter />
  </Redux>
);

export default App;
