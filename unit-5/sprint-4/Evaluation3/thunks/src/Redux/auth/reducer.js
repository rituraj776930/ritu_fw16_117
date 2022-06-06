import { FAILURE, LOADING, LOADING22, SUCCESS } from "./action"

const initState = {
    auth:false,
    token:null,
    loading:false,
    success:false,
    failure:false
}

export const AuthReducer = (state = initState , {type,payload})=>{
    switch(type){
        case LOADING:{
            return{
                ...state,
                loading:true
            }
        }
        case SUCCESS:{
            return{
                ...state,
                token:payload,
                success:true,
                auth:true,
                failure:false
            }
        }
        case FAILURE:{
            return{
                ...state,
                failure:true
            }
        }
        case LOADING22:{
            return{
                ...state,
                loading:false
            }
        }
        default:
            return state
    }
}