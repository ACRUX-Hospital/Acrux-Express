import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    image: {
        width: '100%',
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
    },
    container: {
        backgroundColor:"#c8e3f8",
        display: "flex",
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: "flex-start",
        paddingLeft:20
    },
    first: {
        backgroundColor: '#fac143',
        width: 350,
        marginBottom:3,
        height: 95,
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "flex-start",
        paddingLeft:20

    },
    second: {
        backgroundColor: "#fe4258",
        width: 350,
        marginBottom:3,
        height: 95,
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "flex-start",
        paddingLeft:20

    },
    third: {
        backgroundColor: "#80c43e",
        width: 350,
        height: 95,
        marginBottom:3,
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "flex-start",
        paddingLeft:20

    },
    fourth: {
        backgroundColor: "#4e81d5",
        width: 350,
        height: 95,
        marginBottom:3,
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "flex-start",
        paddingLeft:20

    }
})

export default styles;