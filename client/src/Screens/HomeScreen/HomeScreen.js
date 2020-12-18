import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import styles from './styles'


const HomeScreen = () => {
    return (
        <View>
            <ImageBackground
                source={{ uri: 'https://aighospitals.com/wp-content/uploads/2018/08/Banner-Doctors.png' }}
                style={styles.image} >
                    <Text style={styles.title}> Welcome to our Hospital </Text>
            </ImageBackground>
        </View>
    )
}

export default HomeScreen