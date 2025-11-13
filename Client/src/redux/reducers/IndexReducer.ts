import {combineReducers} from "redux"
import { userReducer } from "./User.Reducer"
import { errorReducer } from "./Error.reducer"
import { allUsersReducer } from "./Users.Reducer"


const reducers = combineReducers({
userReducer,
allUsersReducer,
errorReducer,

})

export default reducers