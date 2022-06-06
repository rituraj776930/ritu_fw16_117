import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { failure2, loading2, loading21, success2 } from '../Redux/app/action'
import { useState } from 'react'
import PostItem from '../Components/PostItem'

function Posts() {
    const [page,setpage] = useState(1)
    const token = useSelector((state)=>state.auth.token)
    const load = useSelector((state)=>state.app.loading)
  const fail = useSelector((state)=>state.app.failure)
  const data2 = useSelector((state)=>state.app.data)
  console.log(load,data2)

  const dispatch = useDispatch()

useEffect(()=>{
    dispatch(loading2())
    axios({
        method:"GET",
        url:"https://jsonplaceholder.typicode.com/posts",
        params:{
            _page:page,
            _limit:10
        }
    })
    .then((res)=>res.data)
    .then((data)=>{
        
        console.log(data)
        dispatch(success2(data))
        dispatch(loading21())
    })
    .catch((error)=>{
        dispatch(failure2())
    })
},[page])
  return (
    <div>
        <div style={{backgroundColor:"black",height:"100px",color:"white",alignItems:"center"}}>
            <h3>Token:{token}</h3>
            <h3>Email:eve.holt@reqres.in</h3>
        </div>
        {load ? <h3>...loading</h3> : <div></div>}
        <button disabled={page===1} onClick={()=>setpage(page-1)}>PREV</button>
        <button onClick={()=>setpage(page+1)}>NEXT</button>
        {data2.map((item)=>{
            return(
                <PostItem key={item.id} item={item}/>
            )
        })}
    </div>
  )
}

export default Posts