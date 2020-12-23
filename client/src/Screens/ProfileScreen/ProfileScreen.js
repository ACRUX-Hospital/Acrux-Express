import React from 'react'
import { connect } from "react-redux"
import { setUser } from "../../Redux/User/userActions"
import { Button ,TouchableHighlight}  from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
const ProfileScreen = ({ setUser, currentUser }) => {
    
    const handleLogOut = () => {
        setUser("")
        AsyncStorage.removeItem("login")
    }
   
    return (
        <View style={styles.container}>
                  <View style={styles.header}></View>
                  <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
                 <View style={styles.body}>
                   <View style={styles.bodyContent}>
                     <Text style={styles.name}>{currentUser}</Text>
                    <Text style={styles.info}></Text>
                    <Text style={styles.info}></Text>
                      
                 {
                currentUser ?
                    // <Button style={{ marginTop: 20 }} onPress={handleLogOut} title="LOGOUT" />
                    <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} >
                    <Text style={styles.loginText}  onPress={handleLogOut}>LOGOUT</Text>
                  </TouchableHighlight>
                    :
                    <></>
                }
                     
                  </View>
                </View>
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
    }
}


const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  }, buttonContainer: {
    marginTop:80,
    height:55,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:350,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)