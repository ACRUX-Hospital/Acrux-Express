import React, { useState, useEffect } from 'react'
import { View, FlatList } from 'react-native'

import ChatListItem from './ChatListItem'
import Local_IP from '../../../helpers/Local_IP'

import { connect } from "react-redux"
import { setDoctor } from "../../Redux/Doctor/doctorAction"

const ChatListScreen = ({ doctorList, setDoctor, navigation, role }) => {


    useEffect( () => {
        console.log('role',role)
        if (role === "Doctor") {
            getPatients()
        } else if(role === 'Patient') {
             getDoctors()
        }

        console.log('clean up')
    }, [])

    const getDoctors = () => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },

        };
        fetch(`${Local_IP}/getDoc`, requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    setDoctor(data.doctors)
                }
            });
    }
    const getPatients = () => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
        };
        console.log("hhhhhhhh")
        fetch(`${Local_IP}/getpatients`, requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    console.log(data.patients)
                    setDoctor(data.patients)
                }
            });
    }
    return (
        <View >
            <FlatList
                showsVerticalScrollIndicator={false}
                data={doctorList}
                renderItem={({ item }) => <ChatListItem doctor={item} navigation={navigation} />}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>

    )
}
const mapStateToProps = ({ doctor, user }) => {
    return {
        doctorList: doctor.doctorList,
        role: user.role
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setDoctor: doctorList => dispatch(setDoctor(doctorList))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ChatListScreen)