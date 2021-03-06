import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import BootSplash from 'react-native-bootsplash';

import { persistor, store } from './src/app/store';
import RootNavigator from './src/navigation';
import useMountEffect from '_hooks/useMountEffect';

const App = () => {
  useMountEffect(() => {
    BootSplash.hide();
  });

  return (
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <RootNavigator />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
};

export default App;
