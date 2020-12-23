import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        // marginBottom:15,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottomWidth:1,
        paddingBottom:15

    },
    image : {
        width: '20%',
        aspectRatio: 3/3,
        borderRadius: 100,
        resizeMode: 'cover'
    },
    name: {
        marginLeft:10,
        fontSize: 20,
        fontWeight: "bold",
        width: '80%'
    }


})

export default styles;