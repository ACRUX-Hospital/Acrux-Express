import React,{useState} from 'react';
import { Button ,TextInput} from 'react-native-paper';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


const Login = (props) => {
  const [email,setEmail] = useState('');
  const [password,setPassword]=useState('')
  
  
  const sendCred = async (props)=>{
    fetch("http://localhost:5000/signin",{
      method:"POST",
      headers: {
       'Content-Type': 'application/json'
     },
     body:JSON.stringify({
       "email":email,
       "password":password
     })
    })
    .then(res=>res.json())
    .then(async (data)=>{
           try {
             await AsyncStorage.setItem('login',data.token)
             props.navigation.replace("Home")
           } catch (e) {
             console.log("error ",e)
           }
    })
 }

  return (
   <> 
   <KeyboardAvoidingView behavior="position">
     <StatusBar backgroundColor="blue" barStyle="light-content" />
      <Text 
      style={{fontSize:35,marginLeft:18,marginTop:10,color:"#3b3b3b"}}>Login</Text>
      <View
      style={{
        borderBottomColor:"blue",
        borderBottomWidth:4,
        borderRadius:10,
        marginLeft:20,
        marginRight:150,
        marginTop:4
      }}
       />
      <TextInput
        label='Email'
        mode="outlined"
        value={email}
        style={{marginLeft:18,marginRight:18,marginTop:18}}
        theme={{colors:{primary:"blue"}}}
        onChangeText={(text)=>setEmail(text)}
     
      />
      <TextInput
        label='password'
        mode="outlined"
        secureTextEntry={true}
        value={password}
        onChangeText={(text)=>{setPassword(text)}}
        style={{marginLeft:18,marginRight:18,marginTop:18}}
        theme={{colors:{primary:"blue"}}}
     
      />
      <Button 
        mode="contained"
        style={{marginLeft:18,marginRight:18,marginTop:18}}
       onPress={() => sendCred(props)}>
        Login
      </Button>
      <TouchableOpacity>
        <Text
      style={{
        fontSize:18,marginLeft:18,marginTop:20
      }}
      onPress={()=>props.navigation.replace("Signup")}
      >dont have a account ?</Text>
      </TouchableOpacity>
      
      </KeyboardAvoidingView>
   </>
  );
};



export default Login;