// NATIVE
import React from 'react';

// INSTALLED
import { Provider } from 'react-redux';

// CUSTOM
import store from './store/store';
import { Navigator } from './routers/Navigator';
import { Main } from './modules/main/Main';
import { BrowserRouter } from 'react-router-dom'



export const  App = () => {
  return (
    <Provider store={store}>
        <Navigator />
    </Provider>
  );
}

export default App;


// import { Provider } from 'react-redux';

// import store from './store/store';
// import { Navigator } from './routers/Navigator';
// import { Main } from './modules/main/Main';
// import { BrowserRouter } from 'react-router-dom'

{/* <BrowserRouter>
  <Provider store={store}>
      <Main />
  </Provider>
</BrowserRouter> */}
