import axios from "axios"

export const GET_DATA = "GET_DATA"
export const POST_DATA = "POST_DATA"
export const NEXT_PAGE = "NEXT_PAGE"
export const PREV_PAGE =  "PREV_PAGE"



export const postData = (dispatch,payload)=>{
    axios({
        method:"post",
        url:"http://localhost:8080/posts",
        data:payload
    })
    .then((res)=>res.data)
    .then((data)=>dispatch({
        type:POST_DATA,
        payload
    }))
    .catch((error)=>{
        console.log("Post_error")
    })
}

export const getData = (dispatch)=>{
    axios({
        method:"GET",
        url:"http://localhost:8080/posts"
    })
    .then((res)=>{
        console.log(res.data)
        return res.data
        
    })
    .then((data)=>
        dispatch({
            type:GET_DATA,
            payload:data
        })
    )
    .catch((error)=>{
        console.log(error)
    })
}
