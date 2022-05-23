import React, { useEffect, useState } from 'react'
import GithubCard from './GithubCard'
import GithubUsers from './GithubUsers'

const GithubRepositories = () => {
  const [loading,setloading]=useState(true)
  const [error,seterror]=useState(false)
  const [data,setdata]=useState([])
  const [text,setText]= useState("")
  const [query,setquery]= useState("masai")
  const [page,setpage]= useState(1)


 
  useEffect(()=>{
    setloading(true)
    GithubUsers(query, page)
   
    .then((res)=>{
      setloading(false)
      setdata(res.data)
      seterror(false)
    })
    .catch((err)=>{
       setloading(false)
      seterror(true)
      console.log(err);
    })

  },[query,page])
  const handleclick=(query)=>setquery(query)
  console.log("query",query);
  return (
    <div>
        <h1>Github Users profile</h1>
        <div>
          <input type="text" value={text} placeholder='search profile'  onChange={(e)=>setText(e.target.value)} />
          <button onClick={()=>handleclick(text)}>Search</button>
        </div>
        {loading && <div>...loading</div>}
        <div id='divpagebtn'><button  disabled={page===1} onClick={()=>setpage(page-1)}>Prev</button>
      <button  onClick={()=>setpage(page+1)}>Next</button></div>
      
        {data?.items?.map((item,index)=>(
          <GithubCard key={index} {...item}/>
        ))}
       
    </div>
  )
}

export default GithubRepositories
