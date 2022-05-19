import React, { useState } from 'react'
import data from './data.json'
import styles from './Restaurant.module.css'
import RestaurantCard from './RestaurantCard'

function Restaurant() {
    const [array , setarray] = useState(data)
    const [Sort , setSort] = useState(0)
    const [type , settype] = useState("")
    const [price , setprice] = useState("")
    const [formdata , setformdata] = useState({
        "total_votes": 1966,
      "total_reviews": 827,
      "total_cost": 119,
      "payment_methods": {
        "card": true,
        "cash": false,
        "upi": false
      },
      "url": "https://via.placeholder.com/150",
    })
    
    console.log(data)
    const handleClick = (temp)=>{
        settype(temp)
        console.log(type)
    }
    const handleChange = (e)=>{
        setSort(0)
        setSort(e.target.value)
        console.log(Sort)
    }
    const handleChange2 = (e)=>{
        setprice(e.target.value)
        console.log(price)
    }
    const handleform = (e)=>{
        const inputname = e.target.name
        console.log(inputname)
        setformdata({
            ...formdata , [inputname] : e.target.value
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        setarray([...array , formdata])
    }
  return (
    <>
    <h1 className={styles.h1}>Restaurant Details</h1>
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" onChange={handleform} />
            <input type="text" name="category" onChange={handleform}/>
            <input type="number" name="rating" onChange={handleform}/>
            <input type="submit" />
        </form>
    </div>
    <div className={styles.container1}>
        <div className={styles.innerdiv1}>
            <div>Filter By :</div>
            <div>
                <select name="Filter" id="" onChange={handleChange}>
                <option value="0">Filter</option>
                <option value="1">Above 1 star</option>
                <option value="2">Above 2 star</option>
                <option value="3">Above 3 star</option>
                <option value="4">Above 4 star</option>
                </select>
            </div>
        </div>
        <div className={styles.innerdiv2}>
            <div>Restaurant Type : </div>
            <button onClick={()=>handleClick("card")}>Card only</button>
            <button onClick={()=>handleClick("cash")}>Cash only</button>
            <button onClick={()=>handleClick("")}>All</button>
        </div>

        <div className={styles.innerdiv1}>
            <div>Sort By : </div>
            <div>
                <select name="Sort" id="" onChange={handleChange2}>
                    <option value="">Sort</option>
                    <option value="l2h">Low to high</option>
                    <option value="h2l">High to low</option>
                </select>
            </div>
        </div> 
    </div>
    <div className={styles.mainContainer}>
    {type ? array.filter((elem)=>elem.payment_methods[type]===true).map((elem,index)=> <RestaurantCard key={index} {...elem}/>)
    : Sort!=0 
    ? array.filter((elem)=>elem.rating>Sort).map((elem,index)=> <RestaurantCard key={index} {...elem}/>)
    : price === "l2h"
    ? array.sort((a,b)=>a.total_cost-b.total_cost).map((elem,index)=> <RestaurantCard key={index} {...elem}/>)
    : price === "h2l"
    ? array.sort((a,b)=>b.total_cost-a.total_cost).map((elem,index)=> <RestaurantCard key={index} {...elem}/>)
    : array.map((elem,index)=> <RestaurantCard key={index} {...elem}/>)
    }
       
    </div>
    </>
  )
}

export default Restaurant