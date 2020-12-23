import {userActionTypes } from "./userActionType"

export const setUser=(user)=>{
     console.log('action',user)
    return {
        type:userActionTypes.SET_CURRENT_USER,
        payload:user
    }
}
