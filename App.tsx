import * as React from 'react';
import { Provider } from 'react-redux';
import Routes from './src/Navigation/Routes';
import store from"./src/store/store";


function App() {
  return (
      <Provider store={store}>
       <Routes/>
      </Provider>
  )
}

export default App





