

const initState={
    count:0
}

export const Reducer = (state=initState,action)=>{
    switch(action.type){
        case "Increment":{
            return{
                ...state,
                count:state.count+1
            }
        }
        case "Decrement":{
            return{
                ...state,
                count:state.count-1
            }
        }
        default:
            return state
    }
}