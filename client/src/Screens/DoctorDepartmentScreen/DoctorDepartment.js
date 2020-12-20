import React,{ useState,useEffect } from 'react'
import { View, FlatList } from 'react-native'

import DoctorCard from '../DoctorScreen/DoctorCard'
import Local_IP from '../../../helpers/Local_IP'

const DoctorDepartmentScreen = ({route,navigation}) => {
    const [result, setResult] = useState([])
    const { itemId} = route.params;

    useEffect(() => {
        getDoctors({departmentID:itemId})
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
                    setResult(data.doc)
                    console.log("fffffff",data.doc)
                }
            });
    }
    return(
    <View>
        <FlatList
                showsVerticalScrollIndicator={false}
                data={result}
                renderItem={({ item }) => <DoctorCard doctor={item} />}
                keyExtractor={(item, index) => index.toString()}
            />
    </View>

    )
    
}

export default DoctorDepartmentScreen