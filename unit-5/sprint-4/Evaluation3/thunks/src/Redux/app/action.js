export const LOADING2 = "LOADING2"
export const SUCCESS2 = "SUCCESS2"
export const FAILURE2 = "FAILURE2"
export const LOADING21 = "LOADING21"


export const loading2 = ()=>{
    return {
        type:LOADING2
    }
}
export const success2 = (data)=>{
    console.log("in action",data)
    return {
        type:SUCCESS2,
        payload:data
    }
}
export const failure2 = ()=>{
    return {
        type:FAILURE2
    }
}
export const loading21 = ()=>{
    return {
        type:LOADING21
    }
}