import React, { useEffect, useState } from 'react'
import { View, Text, ImageBackground, Image, FlatList } from 'react-native'
import DepartmentCard from './DepartmentCard'
import styles from './styles'

import Local_IP from '../../../helpers/Local_IP'
import { floor } from 'react-native-reanimated'


const DepartmentScreen = () => {

    const [departments, setDepartments] = useState([])

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
                if (data.success) {
                    setDepartments(data.departments)
                }
            });
    }
    // console.log(departments)
    return (

        <View >
            <FlatList
                showsVerticalScrollIndicator={false}
                data={departments}
                renderItem={({ item }) => <DepartmentCard department={item} />}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

export default DepartmentScreen