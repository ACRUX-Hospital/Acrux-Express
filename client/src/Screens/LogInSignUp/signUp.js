import React,{useState} from 'react';
import { Button,TextInput} from 'react-native-paper';
import {
  StyleSheet,View,Text
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const Signup = (props) => {

  const [email,setEmail] = useState('');
  const [password,setPassword]=useState('')
  const [name,setName]=useState('')
  const [phoneNumber,setPhone]=useState('')
  // const [role,setRole]=useState('')


  const sendCred= async (props)=>{
     fetch("http://localhost:5000/signup",{
       method:"POST",
       headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        "email":email,
        "password":password,
        "phoneNumber":phoneNumber,
        "name":name
      })
     })
     .then(res=>res.json())
     .then(async (data)=>{
            try {
              await AsyncStorage.setItem('login',data.token)
              props.navigation.replace("Login")
            } catch (e) {
              console.log("erro")
            }
     })
  }
  return (
       <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='name'
          autoCapitalize="none"
          placeholderTextColor='white'
          value={name}
          onChangeText={(text)=>{setName(text)}}
          />
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          value={password}
          onChangeText={(text)=>{setPassword(text)}}
          />
        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={(text)=>{setEmail(text)}}
          />
        <TextInput
          style={styles.input}
          placeholder='Phone Number'
          autoCapitalize="none"
          placeholderTextColor='white'
          value={phoneNumber}
          onChangeText={(text)=>{setPhone(text)}}
          />
         <Button 
        mode="contained"
       onPress={() => sendCred(props)}>
        signup
      </Button>
        <Text
      onPress={()=>props.navigation.replace("Login")}
      >already have a account ?</Text>
        </View>
  );
};



export default Signup;

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