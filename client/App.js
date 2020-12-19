import React from 'react';
import Login from './src/Screens/LogInSignUp/login'
import Chat from "./src/Screens/Chat/chat"

import { Provider } from 'react-redux';
import store from "./src/Redux/store"

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Stacks from './src/Navigations/Stacks'
import HomeScreen from './src/Screens/HomeScreen/HomeScreen'
import DepartmentScreen from './src/Screens/DepartmentScreen/DepartmentScreen'
import DoctorScreen from './src/Screens/DoctorScreen/DoctorScreen'
import { View, StatusBar } from 'react-native';

const Stack = createStackNavigator();
const Tap = createMaterialTopTabNavigator()

export default function App() {
  return (


    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      {/* <NavigationContainer>
        <Tap.Navigator>
          <Tap.Screen name='Home' component={HomeScreen} />
          <Tap.Screen name='Departments' component={DepartmentScreen} />
          <Tap.Screen name='chat' component={Chat} />
          <Tap.Screen name='doctor' component={DoctorScreen} />
        </Tap.Navigator>
      </NavigationContainer> */}
      <Stacks />
    </Provider>


  );
}
