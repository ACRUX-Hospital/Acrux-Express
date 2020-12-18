
import React from 'react';
// import { StyleSheet } from 'react-native';
import Home from './components/pages/home'
import Login from './components/pages/login'
import Chat from "./components/pages/chat"

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from './src/Screens/HomeScreen/HomeScreen'
import DepartmentScreen from './src/Screens/DepartmentScreen/DepartmentScreen'
import { View, StatusBar } from 'react-native';

const Stack = createStackNavigator();
const Tap = createMaterialTopTabNavigator()

export default function App() {
  return (


    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Tap.Navigator>
          <Tap.Screen name='Home' component={HomeScreen} />
          <Tap.Screen name='Departments' component={DepartmentScreen} />
          <Tap.Screen name='chat' component={Chat} />
        </Tap.Navigator>
      </NavigationContainer>
    </>


  );
}
