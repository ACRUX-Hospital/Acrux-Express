import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        margin: 20,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'

    },
    image : {
        width: '100%',
        aspectRatio: 2/3,
        borderRadius: 15,
        resizeMode: 'cover'
    },
    name: {
        marginTop:5,
        fontSize: 20,
        fontWeight: "bold",
        width: '80%'
    }


})

export default styles;