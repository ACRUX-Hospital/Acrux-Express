import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from './Tabs'
import Signup from '../Screens/LogInSignUp/signUp'
import DepartmentScreen from '../Screens/DepartmentScreen/DepartmentScreen'
import { connect } from "react-redux"
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