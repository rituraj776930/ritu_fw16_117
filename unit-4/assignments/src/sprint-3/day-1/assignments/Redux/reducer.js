import { ADDITION, DECRE, DIVIDE, INCRE, MULTIPLY, SET } from "./actiontypes"


 const initState = {
    value : 0
}

export const reducer = (state = initState , {type , payload})=>{
    switch(type){
        case SET : {
            return{
                ...state , 
                value : payload + state.value
            }
        }
        case INCRE:{
            return{
                ...state , 
                value : state.value+payload
            }
        }
        case DECRE : {
            return{
                ...state , 
                value : state.value -payload
            }
        }
        case ADDITION : {
            return{
                ...state ,
                value : state.value+payload
            }
        }
        case MULTIPLY : {
            return{
                ...state , 
                value : state.value * payload
            }
        }
        case DIVIDE : {
            return{
                ...state , 
                value : (state.value) / payload
            }
        }
       default:{
           return{
              ...state 
              
           }
       }
    }
}