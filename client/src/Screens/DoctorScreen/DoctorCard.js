import React from 'react'
import { View,Text, Image } from 'react-native'
import styles from './styles'

const DoctorCard = ({ doctor }) => {
    // console.log(doctor)
    return (
        <View style={styles.container}>
            <Image
            style={styles.image}
             source={{uri:doctor.image}} />
            <Text style={styles.name}>{doctor.userID.name}</Text>
        </View>

    )
}

export default DoctorCard