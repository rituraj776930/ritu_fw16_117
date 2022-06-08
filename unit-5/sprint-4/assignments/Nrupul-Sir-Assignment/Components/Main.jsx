import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import ProductItem from './ProductItem'

function Main() {
    const [page,setpage] =  useState(JSON.parse(localStorage.getItem("page")) ? JSON.parse(localStorage.getItem("page")) : 1)
    const [limit,setlimit] = useState(JSON.parse(localStorage.getItem("limit")) ? JSON.parse(localStorage.getItem("limit")) : 10)
    const [datas , setdatas] = useState([])
    const [sorttype,setsorttype] = useState("")
    const [price,setprice] = useState(0)
    const navigate = useNavigate()


    const goToUrl = ()=>{
        navigate({
            pathname:"/",
            search:`_page=${page}&_limit=${limit}`
        })
    }
    useEffect(()=>{

        axios({
            method:"GET",
            url:"http://localhost:3000/data",
            params:{
                _page:page,
                _limit:limit,
                _sort:"price",
                _order:sorttype
            }
        })
        .then((res)=>res.data)
        .then((data)=>{
            localStorage.setItem("page",limit)
            localStorage.setItem("page",page)
            setdatas(data)
            goToUrl()
        })
        .catch((error)=>{
            console.log("error")
        })
    },[page,limit,sorttype])

  return (
    <div>
        <h1>Welcome to Main Page</h1>
        <div style={{display:"flex",justifyContent:"space-between"}}>
            <div>
                <button onClick={()=>setsorttype("asc")}>Sort By Low Price</button>    
                <button onClick={()=>setsorttype("desc")}>Sort By High Price</button>
            </div>

            <div>
                <button disabled={page==1} onClick={()=>setpage(page-1)}>PREV</button>
                <button  onClick={()=>setpage(page+1)}>NEXT</button>
                <button onClick={()=>setlimit(limit-1)}>-</button>{limit}<button onClick={()=>setlimit(limit+1)}>+</button>
            </div>

            <div>
                <button onClick={()=>setprice(500)}>Filter price above 500</button>
                <button onClick={()=>setprice(1000)}>Filter price above 1000</button>
            </div>
        </div>
        <div style={{display:"grid",gap:"5px",gridTemplateColumns:"repeat(3,1fr)",marginLeft:"140px"}}>
        {price!=0 ? datas.filter((item)=>(item.price > price)).map((item)=><ProductItem key={item.id} item={item}/>)
                :datas.map((item)=><ProductItem key={item.id} item={item}/>)

        }  
        </div>
    </div>
  )
}

export default Main