import rootreducer from "./reducer/mainreducer";
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({reducer:rootreducer})
// +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default store;