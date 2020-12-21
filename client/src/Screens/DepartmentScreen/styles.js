import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        margin: 20,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'

    },
    image: {
        width: '100%',
        aspectRatio: 3/2,
        borderRadius: 15,

    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        width:'80%'
    },
    about: {
        marginTop: 4,
        fontSize: 16,
        padding: 5
        
    }


})

export default styles;