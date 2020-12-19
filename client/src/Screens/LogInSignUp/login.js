import React, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import {
  View,
  StyleSheet
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')


  const sendCred = async (props) => {
    fetch("http://localhost:5000/signin", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email": email,
        "password": password
      })
    })
      .then(res => res.json())
      .then(async (data) => {
        console.log("ccc", data)
        try {
          console.log("ccc", data)
          await AsyncStorage.setItem('login', data.token)
          props.navigation.replace("home")
        } catch (e) {
          console.log("error ")
        }
      })
  }

  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize="none"
          placeholderTextColor='white'
          value={email}
          onChangeText={(text) => { setEmail(text) }}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          autoCapitalize="none"
          placeholderTextColor='white'
          value={password}
          onChangeText={(text) => { setPassword(text) }}
        />
        <Button
          mode="contained"
          onPress={() => sendCred(props)}>
          Login
      </Button>
      <Button
          mode="contained"
          style={{marginTop:5}}
          onPress={() =>  props.navigation.navigate("Signup")}>
          Sign Up
      </Button>
      </View>
    </>
  );
};



export default Login;

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#42A5F5',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})