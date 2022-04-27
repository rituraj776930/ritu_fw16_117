import { INCRE , DECRE , SET, ADDITION, MULTIPLY, DIVIDE } from "./actiontypes";

export const addvalue = (payload)=>{
    return{
        type :  INCRE,
        payload 

    }
}

export const subtractvalue = (payload)=>{
    return{
        type :  DECRE,
        payload 

    }
}

export const setnum = (payload)=>{
    return{
        type : SET , 
        payload
    }
}
export const addition = (payload)=>{
    return{
        type : ADDITION , 
        payload
    }
}
export const multiplication = (payload)=>{
    return{
        type : MULTIPLY ,
        payload
    }
}
export const division = (payload)=>{
    return{
        type: DIVIDE , 
        payload
    }
}