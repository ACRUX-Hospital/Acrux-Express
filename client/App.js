import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from "./src/Redux/store"
import Stacks from './src/Navigations/Stacks'
import { StatusBar } from 'react-native';


const App = () => {

  return (


    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      
      <Stacks />
    </Provider>


  );
}



export default App
