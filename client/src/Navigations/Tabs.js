import React from 'react';
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen/HomeScreen'
import DoctorScreen from '../Screens/DoctorScreen/DoctorScreen'
import DepartmentScreen from '../Screens/DepartmentScreen/DepartmentScreen'
import Chat from '../Screens/Chat/chat'
import Login from '../Screens/LogInSignUp/login'
import ArtIcons from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (

        <Tab.Navigator
            tabBarOptions={{
                // activeTintColor: '#f15454',
                activeTintColor: '#1294f8',
              }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({color}) => (
                        <ArtIcons name="home" size={25} color={color} />
                      )
                }}
            />
            <Tab.Screen
                name="Departments"
                component={DepartmentScreen}
                options={{
                    tabBarLabel: 'Departments',
                    tabBarIcon: ({color}) => (
                        <FontAwesome name="hospital-o" size={25} color={color} />
                      )
                }}
            />
            <Tab.Screen
                name="Doctor"
                component={DoctorScreen}
                options={{
                    tabBarLabel: 'Doctor',
                    tabBarIcon: ({color}) => (
                        <Fontisto name="doctor" size={25} color={color} />
                      )
                    
                }}
            />
            <Tab.Screen
                name="Inbox"
                component={Chat}
                options={{
                    tabBarLabel: 'Inbox',
                    tabBarIcon: ({color}) => (
                        <MaterialIcons name="inbox" size={25} color={color} />
                      )
                    
                }}
            />
            <Tab.Screen
                name="Login"
                component={Login}
                options={{
                    tabBarLabel: 'Login',
                    tabBarIcon: ({color}) => (
                        <MaterialIcons name="login" size={25} color={color} />
                      )
                    
                }}
            />


        </Tab.Navigator>
    )
}

export default Tabs