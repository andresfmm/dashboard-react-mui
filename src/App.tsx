// NATIVE
import React from 'react';

// INSTALLED
import { Provider } from 'react-redux';

// CUSTOM
import store from './store/store';
import { Navigator } from './routers/Navigator';



export const  App = () => {
  return (
    <Provider store={store}>
        <Navigator />
    </Provider>
  );
}

export default App;

