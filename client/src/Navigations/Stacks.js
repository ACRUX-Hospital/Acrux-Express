import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from './Tabs'
import Signup from '../Screens/LogInSignUp/signUp'
import DoctorDepartmentScreen from '../Screens/DoctorDepartmentScreen/DoctorDepartment'

import DepartmentScreen from '../Screens/DepartmentScreen/DepartmentScreen'
import { connect } from "react-redux"
import Chat from "../Screens/Chat/chat"
const Stack = createStackNavigator();
const Stacks = ({ currentUser }) => {
    console.log("currnetUser", currentUser)
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='home' component={Tabs} options={{
                    headerShown: false,
                }} />
                <Stack.Screen name='Signup' component={Signup} />
                <Stack.Screen name='Chat' component={Chat} />
                <Stack.Screen name='DoctorDepartment' component={DoctorDepartmentScreen} />
            </Stack.Navigator>

        </NavigationContainer>
    )
}

const mapStateToProps = ({ user: { currentUser } }) => {
    return {
        currentUser
    }
}

export default connect(mapStateToProps)(Stacks)