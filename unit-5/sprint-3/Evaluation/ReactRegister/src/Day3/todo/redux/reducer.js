import { GET_DATA, POST_DATA } from "./action"

const initState = {
    todos_data:[],
    isLoading:false,
    isError:false,
    page:1
}

export const Reducer = (state = initState,action)=>{
    switch(action.type){
        case GET_DATA:{
            console.log(action.payload)
            return{
                ...state,
                todos_data:action.payload
            }
        }
        case POST_DATA:{
            console.log(action.payload)
            return{
                ...state,
                todos_data:[...state.todos_data,action.payload]
            }
        }
        case 
        default:
            return state
    }
}