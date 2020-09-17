import 'react-native-gesture-handler';
import * as React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Root } from './base/navigation/Root';
import { Provider } from 'react-redux';
import createReduxStore from './base/redux/store';
import rootSaga from './base/redux/sagas';

const { store, persistor } = createReduxStore();
store.runSaga(rootSaga);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Root />
      </PersistGate>
    </Provider>
  );
};

export default App;
