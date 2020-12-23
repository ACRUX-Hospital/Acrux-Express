import { doctorActionTypes} from "./doctorActionTypes"


const INITAIL_STATE = {
    doctorList:[],
    
}

const doctorReducer = (state = INITAIL_STATE, action) => {
    switch (action.type) {
        case doctorActionTypes.SET_DOCTOR_LIST:
            return {
                ...state,
                doctorList:action.payload
            }
        default:
            return state
    }
}
export default doctorReducer