import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { legacy_createStore as createStore} from "redux";
import thunk from 'redux-thunk'
import { AppReducer } from "./app/reducer";
import { AuthReducer } from "./auth/reducer";


const rootReducer = combineReducers({
    auth:AuthReducer,
    app:AppReducer
})
export const store = createStore(rootReducer,applyMiddleware(thunk))