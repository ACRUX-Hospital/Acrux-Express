import React, { useState, useEffect } from 'react';

import io from "socket.io-client";
import { SafeAreaView, View, Text, Button, KeyboardAvoidingView, ScrollView } from "react-native"
import { Input } from 'react-native-elements';
import MessageBubble from "./oneChat"
import Local_IP from '../../../helpers/Local_IP'
// import{keyboardawarescrollview} from "react-native-keyboard-aware-scroll-view"
export default function Chat() {
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState('')
  const [socket, setSocket] = useState(null)
  const [room, setRoom] = useState('sec-room')

  const myScrollView = React.createRef()
  React.useEffect(() => {

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
        console.log("dataaaaaaa", messages)
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
              {/* if() */ }
              return <MessageBubble text={message.message} key={i} />
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
          <View style={{ flex: 1, borderRadius: 30 }}>
            <Button
              onPress={handleSubmit}
              title="SEND"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );

}