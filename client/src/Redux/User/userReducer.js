import { userActionTypes } from "./userActionType"

const INITAIL_STATE = {
    currentUser: null,
    id: null,
    email: null,
    role: null,
    phoneNumber: null
}

const userReducer = (state = INITAIL_STATE, action) => {
    switch (action.type) {
        case userActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload.name,
                id: action.payload._id,
                email: action.payload.email,
                role: action.payload.role,
                phoneNumber: action.payload.phoneNumber
            }
        default:
            return state
    }
}
export default userReducer