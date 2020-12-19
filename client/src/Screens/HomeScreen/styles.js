import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    image: {
        width:'100%',
        height: 300,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {    
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        width: '80%'
    }   
})

export default styles;