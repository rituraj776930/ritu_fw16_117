import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import CandidateCard from "./components/CandidateCard";
import "./styles.css";
import axios from 'axios'

export default function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [income , setincome] = useState("")
  useEffect(()=>{
    getdata({page , income})
  },[page , income])

  const getdata = async({page,income})=>{
    {
      axios({
        method:"get",
        url:"https://json-server-mocker-masai.herokuapp.com/candidates",
        params:{
          _page:page,
          _limit:5,
          _sort:"salary",
          _order:income
        },
      })
      .then((res)=>{
        setData(res.data)
      })
      .catch((err)=>{})
    }
  };

  return (
    <div className="App">
      <div>
        <div id="loading-container">...Loading</div>
        {income === "DESC" ? (
        <Button id="SORT_BUTTON" title={`Sort by Ascending Salary`} onClick={()=>setincome("ASC")}  />)
        :
        (
          <Button 
          id="SORT_BUTTON" title={`Sort by Descending Salary`} onClick={()=>setincome("DESC")}/>
        )}

        <Button title="PREV"  id="PREV" disabled={page===1} onClick={()=>setPage(page-1)}/>
        <Button id="NEXT" title="NEXT" onClick={()=>setPage(page+1)} />
      </div>
      {data.map((item) => {
        return(
          <CandidateCard key={item.id} {...item}/>
        )
      })}
    </div>
  );
}
