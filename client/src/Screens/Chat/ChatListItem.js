import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

const ChatListItem = ({ doctor, navigation }) => {
    // console.log(doctor)
    return (
        <View style={styles.container} >
            <Image
                style={styles.image}
                source={{ uri: doctor.image }} />

            <Text style={styles.name} onPress={() => navigation.navigate('Chat', {
                doctorName: doctor.userID.name
            })}>{doctor.userID.name}</Text>
        </View>

    )
}

export default ChatListItem