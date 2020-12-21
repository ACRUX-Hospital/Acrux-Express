import React, { useEffect } from 'react'
import { View, Text, ImageBackground, Button } from 'react-native'
import styles from './styles'
import { connect } from "react-redux"
import { setUser } from "../../Redux/User/userActions"
import AsyncStorage from '@react-native-community/async-storage'
import Local_IP from '../../../helpers/Local_IP'
import {setDoctor} from "../../Redux/Doctor/doctorAction"

const HomeScreen = ({ setUser, currentUser,setDoctor }) => {
    const handleLogOut = () => {
        setUser("")
        setDoctor([])
        AsyncStorage.removeItem("login")
    }

    useEffect(() => {
        verifyToken()
    }, [])

    const verifyToken = async () => {
        console.log(await AsyncStorage.getItem('login') )
        const token = await AsyncStorage.getItem('login')
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'login': token
            },
        }
        fetch(`${Local_IP}/auth`, requestOptions)
            .then(res => res.json())
            .then(async (data) => {
                
                try {
                    console.log('auth',data)
                    setUser(data)

                } catch (err) {
                    console.log(err.message)
                }
            })
            .catch(err => console.log(err.message))
    }

    return (
        <View>
            <ImageBackground
                source={{ uri: 'https://aighospitals.com/wp-content/uploads/2018/08/Banner-Doctors.png' }}
                style={styles.image} >
                <Text style={styles.title}> Welcome to our Hospital </Text>
            </ImageBackground>
            {
                currentUser ?
                    <Button onPress={handleLogOut} title="LOGOUT" />
                    :
                    <></>
            }
        </View>
    )
}
const mapStateToProps = ({ user: { currentUser } }) => {
    return {
        currentUser
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setUser: user => dispatch(setUser(user)),
        setDoctor: user => dispatch(setDoctor(user))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)