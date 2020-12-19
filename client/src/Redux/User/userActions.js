import {userActionTypes } from "./userActionType"

export const setUser=(user)=>{
    return {
        type:userActionTypes.SET_CURRENT_USER,
        payload:user
    }
}
