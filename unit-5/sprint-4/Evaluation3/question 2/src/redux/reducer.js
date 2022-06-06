import { actionTypes } from "./action";

const initState = {
    loading:false,
    error:false,
    datas:[]
};

function reducer(state = initState, action) {
    // write code here
    switch(action.types){
        case actionTypes.ADD_USER_REQUEST:{
            return{
                ...state,
                loading:true,
                error:false
            }
        }
        case actionTypes.ADD_USER_SUCCESS:{
            return{
                ...state,
                loading:false,
                datas:action.payload,
                error:false
            }
        }
        case actionTypes.ADD_USER_FAILURE:{
            return{
                ...state,
                error:true,
                loading:false
            }
        }
        default:
            return state
    }
}

export default reducer;
