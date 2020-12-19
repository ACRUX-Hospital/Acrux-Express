import { doctorActionTypes} from "./doctorActionTypes"

export const setDoctor=(doctorList)=>{
    return {
        type:doctorActionTypes.SET_DOCTOR_LIST,
        payload:doctorList
    }
}
