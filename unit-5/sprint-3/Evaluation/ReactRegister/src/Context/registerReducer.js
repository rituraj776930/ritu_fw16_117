// write reducer for the registartion reducer

export const initState={
    user:null,
    email:null,
    address:null,
    number:null
}

export const Reducer = (state , action)=>{
    switch(action.type){
        case "register_one":{
            return{
                ...state,
                user:action.payload.user,
                email:action.payload.email
            }
        }
        case "register_two":{
            return{
                ...state,
                address:action.payload.address,
                number:action.payload.number,
            }
        }
        default:
            return state
    }
}
