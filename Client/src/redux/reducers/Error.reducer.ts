import { GET_USER_ERRORS } from "../actions/user.actions"


const initialState = { userError : []}

export const errorReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_USER_ERRORS:
            return{
                userError: action.payload
            }
            default:
                return state
    }
}