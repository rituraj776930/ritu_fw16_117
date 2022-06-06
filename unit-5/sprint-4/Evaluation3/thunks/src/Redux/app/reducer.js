import {  FAILURE2,  LOADING2, LOADING21, SUCCESS2 } from "./action"


const initState = {
    data:[],
    loading:false,
    success:false,
    failure:false
}

export const AppReducer = (state = initState , {type,payload})=>{
    switch(type){
        case LOADING2:{
            return{
                ...state,
                loading:true
            }
        }
        case SUCCESS2:{
            console.log("in reducer",payload)
            return{
                ...state,
                data:payload,
                success:true
            }
        }
        case FAILURE2:{
            return{
                ...state,
                failure:true
            }
        }
        case LOADING21:{
            return{
                ...state,
                loading:false
            }
        }
        default:
            return state
    }
}