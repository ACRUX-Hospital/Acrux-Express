import React, { useState, useEffect } from 'react';

import io from "socket.io-client";
import { SafeAreaView, View, Text, Button, KeyboardAvoidingView } from "react-native"
import { Input } from 'react-native-elements';
import MessageBubble from "./oneChat"
// import{keyboardawarescrollview} from "react-native-keyboard-aware-scroll-view"
export default function Chat() {
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState('')
  const [socket, setSocket] = useState(null)
  const [room, setRoom] = useState('my-room')
  const [trial, setTrial] = useState('')

  React.useEffect(() => {
    var newSocket = io.connect('http://192.168.1.107:5000');
    newSocket.on("connection", () => {
      console.log("connected")
    })

    setSocket(newSocket)
  }, [])

  const onTry = () => {
    const obj = { heree: 'tryyyy me' }

    const requestOptions = {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(obj)
    };
    fetch('http://192.168.0.108:5000/trial', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch((err) => console.log(err))
  }


  const handleSubmit = (e) => {
    // console.log(socket)
    e.preventDefault()
    if (socket && message) {
      socket.emit("messages", {
        room,
        message: message,
      });
    }
    // console.log(message)
    setMessage("")
  }

  React.useEffect(() => {
    // console.log('dddd', socket)
    if (socket) {
      socket.on("newMessage", ({ message }) => {
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
      socket.on("data", (data) => {
        console.log("dataaaaaaa", data)
      })
    }


    return () => {
      //Component Unmount
      if (socket) {
        socket.emit("leaveRoom", {
          room,
        });
      }
    };
    //eslint-disable-next-line
  }, [socket]);


  return (

    <SafeAreaView>
      {/* <KeyboardAvoidingView
            style={{flex:1}}
            behavior="padding"
          > */}

      {messages && messages.map((message, i) => {

        return <MessageBubble text={message} key={i} />
      })}
      <MessageBubble
        mine
        text="HELOOO"
      />
      <MessageBubble
        text="HELOOO"
      />
      <View style={{ flex: 1, flexDirection: 'row', alignItems: "stretch" }}>
        <View style={{ width: 300, height: 50 }}>
          <Input
            placeholder='type message ...'
            onChangeText={text => setMessage(text)}
            value={message}
          />
          <Input
            placeholder='type message ...'
            onChangeText={text => onTry()}
            value={trial}
          />
        </View>
        <View style={{ width: 100, height: 50, margin: 5 }}>
          <Button
            onPress={handleSubmit}
            title="SEND"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
      {/* </KeyboardAvoidingView> */}
    </SafeAreaView>



  );

}
