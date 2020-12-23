import  { useState } from 'react';

import AsyncStorage from '@react-native-community/async-storage';
import { setUser } from '../../Redux/User/userActions'
import { connect } from 'react-redux'
import Local_IP from '../../../helpers/Local_IP'

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';

const Login = ({ navigation, setUser }) =>  {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')


  const sendCred = async () => {
    const obj = {email,password}
    fetch(`${Local_IP}/signin`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(obj)
    })
      .then(res => res.json())
      .then(async (data) => {
         console.log("ccc", data)
        try {
          // console.log("ccc", data.user)
          await AsyncStorage.setItem('login', data.token)
          // console.log("useeeer",data.user)
          setUser(data.user)
          navigation.replace("home")
        } catch (e) {
          console.log("error ")
        }
      })
  }


  
  
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              value={email}
              onChangeText={(text) => { setEmail(text) }}
              />
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              value={password}
            onChangeText={(text) => { setPassword(text) }}
            />
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} >
          <Text style={styles.loginText}  onPress={() => sendCred()}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} >
            <Text>Forgot your password?</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => navigation.navigate("Signup")}>
            <Text>Register</Text>
        </TouchableHighlight>
      </View>
    );
  }
  const mapDispatchToProps = (dispatch) => {
      return {
        setUser: (user) => dispatch(setUser(user))
      }
    }
    export default connect(null, mapDispatchToProps)(Login);
    

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center',
      
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
      
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});

                    
