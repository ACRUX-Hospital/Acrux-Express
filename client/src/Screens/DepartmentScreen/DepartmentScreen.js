import React, { useEffect, useState } from 'react'
import { View,FlatList } from 'react-native'
import DepartmentCard from './DepartmentCard'
import Local_IP from '../../../helpers/Local_IP'


const DepartmentScreen = ({navigation}) => {


    const [departments, setDepartments] = useState([])
    // console.log(departments)
    useEffect(() => {
        getDepartments()
    }, [])

    const getDepartments = () => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },

        };
        fetch(`${Local_IP}/getDep`, requestOptions)
            .then(response => response.json())
            .then(data => {
                // console.log("dd",data)
                if (data.success) {
                    setDepartments(data.departments)
                }
            });
    }
    return (

        <View >
            <FlatList
                showsVerticalScrollIndicator={false}
                data={departments}
                renderItem={({ item }) => <DepartmentCard navigation ={navigation} department={item} />}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

export default DepartmentScreen