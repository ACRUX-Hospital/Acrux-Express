import React from 'react';
// import { StyleSheet } from 'react-native';
import Home from './components/pages/home'
import Login from './components/pages/login'
import Signup from './components/pages/signUp'
import Chat from "./components/pages/chat"
import Department from './components/pages/department'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/Screens/HomeScreen/HomeScreen'
import DepartmentScreen from './src/Screens/DepartmentScreen/DepartmentScreen'
import { View} from 'react-native';

const Stack = createStackNavigator();


export default function App() {
  return (
    <View>


      <HomeScreen />
      <DepartmentScreen />
    </View>
    // <NavigationContainer>

    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="Chat"
    //       component={Chat}
    //     />
    //     <Stack.Screen
    //       name="Home"
    //       component={Home}
    //     />
    //     <Stack.Screen
    //       name="Signup"
    //       component={Signup}
    //     />
    //     <Stack.Screen
    //       name="Login"
    //       component={Login}
    //     />
    //     <Stack.Screen
    //       name="Department"
    //       component={Department}
    //     />
    //   </Stack.Navigator>

    // </NavigationContainer>


  );
}
