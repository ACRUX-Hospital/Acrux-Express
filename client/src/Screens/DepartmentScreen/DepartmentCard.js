import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'


const DepartmentCard = ({department}) => {
    // console.log(department)
    return (
        <View style={styles.container}>
            {/* Image */}
            <Image
                style={styles.image}
                source={{ uri: department.image }}
            />
            {/* Name */}
            <Text
                style={styles.title}
            >{department.name} </Text>
            {/* Description */}
            <Text
                style={styles.about}
                numberOfLines={3}
            >{department.about}</Text>
        </View>
    )
}

export default DepartmentCard