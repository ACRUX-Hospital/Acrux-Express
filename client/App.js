import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
// import { NativeRouter, Route, Link } from "react-router-native";
// import {Login}  from './components/pages/login'
// import {Sigup}  from './components/pages/signUp'
 import Home  from './components/pages/home'
// import {Chat}  from './components/pages/chat'
import Navigator from './routes/homeStack';

export default function App() {
  return (
    // <Home/>
    <Navigator/>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
