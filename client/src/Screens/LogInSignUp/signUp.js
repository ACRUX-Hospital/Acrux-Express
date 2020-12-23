
import React, { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { setUser } from '../../Redux/User/userActions'
import { connect } from 'react-redux'
import Local_IP from '../../../helpers/Local_IP'

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

const Signup = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [phoneNumber, setPhone] = useState('')
  // const [role,setRole]=useState('')


  const sendCred = async (props) => {
    fetch(`${Local_IP}/signup`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        "email": email,
        "password": password,
        "phoneNumber": phoneNumber,
        "name": name
      })
    })
      .then(res => res.json())
      .then(async (data) => {
        try {
          await AsyncStorage.setItem('login', data.token)
          props.navigation.replace("home")
        } catch (e) {
          console.log("erro")
        }
      })
  }
  
  
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
            placeholder='name'
            autoCapitalize="none"
            value={name}
            onChangeText={(text) => { setName(text) }}
              />
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
            placeholder='Email'
             autoCapitalize="none"
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
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder='Phone Number'
               autoCapitalize="none"
               value={phoneNumber}
               onChangeText={(text) => { setPhone(text) }}
            />
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} >
          <Text style={styles.loginText}  onPress={() => sendCred(props)}>Register</Text>
        </TouchableHighlight>

        

      
      </View>
    );
  }
 
    export default Signup;
    

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

                    
