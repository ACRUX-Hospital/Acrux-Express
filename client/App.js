import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import {Login}  from './components/pages/login'
import {Sigup}  from './components/pages/signUp'
import {Home}  from './components/pages/home'
import {Chat}  from './components/pages/chat'


export default function App() {
  return (
    <View style={styles.container}><Text>App</Text></View>
  // <NativeRouter>
  //   <View style={styles.container}>
  //     
      
  //       <Route exact path="/" component={Home} />
  //       <Route path="/login" component={Login} />
  //       <Route path="/sigup" component={Sigup} />
  //       <Route path="/chat" component={Chat} />
  //       </View>

  //     </NativeRouter>
    
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
