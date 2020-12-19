import React,{ useState,useEffect } from 'react'
import { View, FlatList } from 'react-native'

import DoctorCard from './DoctorCard'
import Local_IP from '../../../helpers/Local_IP'

const DoctorScreen = () => {
    const [doctors, setDoctors] = useState([])
    
    useEffect(() => {
        getDoctors()
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
                    setDoctors(data.doctors)
                }
            });
    }
    return(
    <View>
        <FlatList
                showsVerticalScrollIndicator={false}
                data={doctors}
                renderItem={({ item }) => <DoctorCard doctor={item} />}
                keyExtractor={(item, index) => index.toString()}
            />
    </View>

    )
}

export default DoctorScreen