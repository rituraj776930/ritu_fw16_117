export const LOADING = "LOADING"
export const SUCCESS = "SUCCESS"
export const FAILURE = "FAILURE"
export const LOADING22 = "LOADING22"


export const loading = ()=>{
    return {
        type:LOADING
    }
}
export const success = (token)=>{
    return {
        type:SUCCESS,
        payload:token
    }
}
export const failure = ()=>{
    return {
        type:FAILURE
    }
}
export const loading22 = ()=>{
    return {
        type:LOADING22
    }
}
