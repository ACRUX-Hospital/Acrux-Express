import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from './Tabs'
import Signup from '../Screens/LogInSignUp/signUp'
import DoctorDepartmentScreen from '../Screens/DoctorDepartmentScreen/DoctorDepartment'

const Stack = createStackNavigator();

const Stacks = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='home' component={Tabs} options={{
                    headerShown: false,
                }} />
                <Stack.Screen name='Signup' component={Signup} />
                <Stack.Screen name='DoctorDepartment' component={DoctorDepartmentScreen} />
            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default Stacks