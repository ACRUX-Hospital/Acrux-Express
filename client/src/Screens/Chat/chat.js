import React, { useState, useEffect } from 'react';
import { Button } from 'react-native-paper';
import io from "socket.io-client";
import { SafeAreaView, View, KeyboardAvoidingView, ScrollView, Icon } from "react-native"
import { Input } from 'react-native-elements';
import MessageBubble from "./oneChat"
import Local_IP from '../../../helpers/Local_IP'
import SendIcon from "react-native-vector-icons/Ionicons"
// import{keyboardawarescrollview} from "react-native-keyboard-aware-scroll-view"
import { connect } from "react-redux"


function Chat({ route, currentUser,doctorList,role }) {
  const { doctorName } = route.params

  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState('')
  const [socket, setSocket] = useState(null)
  const [room, setRoom] = useState('')
  console.log("dddddddddd", doctorName)
  const myScrollView = React.createRef()
  React.useEffect(() => {
    
    if(role==="Doctor"){
      setRoom(`${currentUser}-${doctorName}`)
    }else{

      setRoom(`${doctorName}-${currentUser}`)
    }
    console.log("doctorLIST",doctorList[0].userID.name)

    var newSocket = io.connect(`${Local_IP}`);

    newSocket.on("connection", () => {
      console.log("connected")
    })

    setSocket(newSocket)
  }, [])


  const handleSubmit = (e) => {
    // console.log(socket)
    e.preventDefault()
    if (socket && message) {
      socket.emit("messages", {
        room,
        message: message,
        UserName: currentUser
      });
    }
    // myScrollView.scrollToEnd({animated: true})
    setMessage("")
  }

  React.useEffect(() => {
    // console.log('dddd', socket)
    if (socket) {
      socket.on("newMessage", (message) => {
        console.log('emmited message', message)
        const newMessages = [...messages, message];
        console.log(newMessages)
        setMessages(newMessages);
      });
    }
  }, [messages, socket]);


  React.useEffect(() => {
    if (socket) {
      socket.emit("join", {
        room,
      });
      socket.on("data", ({ messages }) => {

        setMessages(messages)
        // console.log("dataaaaaaa", messages)
      })
    }
    return () => {
      if (socket) {
        socket.emit("leaveRoom", {
          room,
        });
      }
    };
  }, [socket]);

  return (

    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
      // behavior="padding"
      >
        <ScrollView ref={myScrollView}>

          <View style={{ flex: 1 }}>
            {messages && messages.map((message, i) => {
              if (message.UserName === currentUser) {
                return <MessageBubble text={message.message} key={i} />
              } else {
                return <MessageBubble mine text={message.message} key={i} />
              }
            })}
          </View>
        </ScrollView>

        <View style={{ flexDirection: 'row', alignItems: "center" }}>
          <View style={{ flex: 3, paddingTop: 15 }}>
            <Input
              placeholder='type message ...'
              onChangeText={text => setMessage(text)}
              value={message}
            />
          </View>
          <View style={{ flex: 1, alignItems: "center", paddingStart: 0, margin: 0, paddingTop: 18 }}>
            {/* <Button
              onPress={handleSubmit}
              title="SEND"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            /> */}
            {/* <Button  icon="send" onPress={handleSubmit}>
            send
            </Button> */}
            <SendIcon name="ios-send-sharp" size={30} color="#1294f8" onPress={handleSubmit} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );

}

const mapStateToProps = ({ user: { currentUser,role } ,doctor:{doctorList}}) => {
  return {
    currentUser,
    doctorList
  }
}
export default connect(mapStateToProps)(Chat)