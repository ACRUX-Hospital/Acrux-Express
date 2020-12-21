import React from 'react'
import { View, Text, Image} from 'react-native'
import styles from './styles'

const DepartmentCard = ({ department,navigation}) => {
    // console.log(department)
    // console.log(navigation)


    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: department.image }}
                title="Go to DoctorDepartment page "
                onPress={() => {
                    navigation.navigate('DoctorDepartment', {
                         itemId:department._id,
                     });
                 }}
            />
            {/* Name */}
            <Text
                onPress={() => {
                    navigation.navigate('DoctorDepartment', {
                         itemId:department._id,
                     });
                 }}
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