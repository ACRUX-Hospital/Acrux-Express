import React, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import {
  View,
  StyleSheet
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { setUser } from '../../Redux/User/userActions'
import { connect } from 'react-redux'
import Local_IP from '../../../helpers/Local_IP'


const Login = ({ navigation, setUser }) => {
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
        // console.log("ccc", data)
        try {
          // console.log("ccc", data.user)
          await AsyncStorage.setItem('login', data.token)
          // console.log(data.user)
          setUser(data.user)
          navigation.replace("home")
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
          onPress={() => sendCred()}>
          Login
      </Button>
        <Button
          mode="contained"
          style={{ marginTop: 5 }}
          onPress={() => navigation.navigate("Signup")}>
          Sign Up
      </Button>
      </View>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => dispatch(setUser(user))
  }
}



export default connect(null, mapDispatchToProps)(Login);

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