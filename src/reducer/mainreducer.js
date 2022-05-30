import savedata from "./reducer";
import { combineReducers } from 'redux'

const rootreducer = combineReducers({
    savedata,
})

export default rootreducer;