import React,{ useState,useEffect } from 'react'
import { View, FlatList } from 'react-native'

import DoctorCard from '../DoctorScreen/DoctorCard'
import Local_IP from '../../../helpers/Local_IP'

const DoctorDepartmentScreen = (props) => {
    const [doctors, setDoctors] = useState([])
    
    useEffect(() => {
        const departmentId = this.props.match.params.id
        getDoctors({_id: departmentId})
    }, [])

    const getDoctors = (obj) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)

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

export default DoctorDepartmentScreen