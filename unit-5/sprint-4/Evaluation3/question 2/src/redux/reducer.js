import { actionTypes } from "./action";

const initState = {
    isLoading:false,
    isError:false,
    data:[]
};

function reducer(state = initState, action) {
    // write code here
    switch(action.types){
        case actionTypes.ADD_USER_REQUEST:{
            return{
                ...state,
                isLoading:true,
                isError:false
            }
        }
        case actionTypes.ADD_USER_SUCCESS:{
            return{
                ...state,
                isLoading:false,
                data:action.payload,
            }
        }
        case actionTypes.ADD_USER_FAILURE:{
            return{
                ...state,
                isError:true,
                isLoading:false
            }
        }
        default:
            return state
    }
}

export default reducer;
