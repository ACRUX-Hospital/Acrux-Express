import React,{ useState,useEffect } from 'react'
import { View, FlatList } from 'react-native'

import DoctorCard from './DoctorCard'
import Local_IP from '../../../helpers/Local_IP'

// import {connect} from "react-redux"
// import {setDoctor} from "../../Redux/Doctor/doctorAction"
const DoctorScreen = () => {
    const [doctors, setDoctor] = useState([])
    
    useEffect(() => {
        getDoctors()
    }, [])

    const getDoctors = () => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },

        };
        fetch(`${Local_IP}/getDoc`, requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    setDoctor(data.doctors)
                }
            });
    }
    return(
    <View>
        <FlatList
                showsVerticalScrollIndicator={false}
                data={doctors}
                renderItem={({ item }) => <DoctorCard doctor={item} />}
                keyExtractor={(item, index) => index.toString()}
            />
    </View>

    )
}
// const mapStateToProps=({doctor:{doctorList}})=>{
//     return{
//         doctorList
//     }
// }
// const mapDispatchToProps=(dispatch)=>{
//     return{
//         setDoctor:doctorList=>dispatch(setDoctor(doctorList))
//     }
// }
export default DoctorScreen