import React, { useEffect } from 'react'
import { View, Text, ImageBackground, Button } from 'react-native'
import styles from './styles'
import { connect } from "react-redux"
import { setUser } from "../../Redux/User/userActions"
import AsyncStorage from '@react-native-community/async-storage'
import Local_IP from '../../../helpers/Local_IP'
import {setDoctor} from "../../Redux/Doctor/doctorAction"
import ClaenderIcon from "react-native-vector-icons/FontAwesome"
import DoctorIcon from "react-native-vector-icons/Fontisto"
import PersonIcon from "react-native-vector-icons/Fontisto"
import ContactIcon from "react-native-vector-icons/MaterialCommunityIcons"
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
        <View style={{backgroundColor:"#c8e3f8",flex:1}}>
            <ImageBackground
                source={{ uri: 'https://aighospitals.com/wp-content/uploads/2018/08/Banner-Doctors.png' }}
                style={styles.image} >
                <Text style={styles.title}> Welcome to our Hospital </Text>
            </ImageBackground>
            <View style={styles.container}> 
            <View style={styles.first}>
                <ClaenderIcon style={{marginRight:10}} name="calendar" size={25}/>
            <View>
                <Text style={{color:"white"}}>BOOK APOINTMENT</Text>
                <Text style={{color:"white"}}>Booking your apointment</Text>
            </View>
            </View>
            <View style={styles.second}>
                <DoctorIcon style={{marginRight:10}} name="doctor" size={25}/>
            <View>
                <Text style={{color:"white"}}>CONSULT</Text>
                <Text style={{color:"white"}}>Consult With Doctor</Text>
            </View>
            </View>
            <View style={styles.third}>
                <PersonIcon style={{marginRight:10}} name="person" size={25}/>
            <View>
                <Text style={{color:"white"}}>DOCTOR</Text>
                <Text style={{color:"white"}}>About The Doctor</Text>
            </View>
            </View>
            <View style={styles.fourth}>
                <ContactIcon  style={{marginRight:10}} name="email" size={25}/>
            <View>
                <Text style={{color:"white"}}>CONTACT</Text>
                <Text style={{color:"white"}}>Contact Us</Text>
            </View>
            </View>
            </View>
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