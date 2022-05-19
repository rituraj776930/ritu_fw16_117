import React from 'react'
import styles from './Restaurantcard.module.css'

function RestaurantCard({
  category,
  total_votes,
  total_reviews,
  total_cost,
  payment_methods,
  url,
  rating,
  name,
}){
const {card , cash , upi} = payment_methods
  return (
    <>
    <div style = {{border: "1px solid black" , height:"auto"}}>
    <div className={styles.main_container}>
        <div><img src={url} alt="" /></div>
        <div>
            <h1 className={styles.same}>{name}</h1>
            <div style={{marginTop: "-15px"}}>{category}</div>
            <div style={{marginTop: "-2px"}} >`Cost of Rs ${total_cost} for one`</div>
            <h2 style={{marginTop: "-5px"}}>Min ₹50 Up to 30 min</h2>
            <h2 style={{marginTop: "-20px"}}>
                Accepts
                {card && cash && upi ?
                 "all payments"
                : card && cash ?
                 "card and cash payment only"
                : card ?
                "card payment only"
                :cash ? 
                "cash payment only"
                :"upi payment only"}
            </h2>
        </div>
        <div>
            <div>Rating : {rating}</div>
            <div>{total_reviews} reviews</div>
            <div>{total_votes} votes</div>
        </div>
        
    </div>
    <div style={{display:"flex"}}>
            <div style={{height:"50px" , width:"650px" , border:"1px solid black" ,marginLeft:"5px"}}></div>
            <div style={{height:"50px" , width:"75px" , border:"1px solid black" ,}}>Order Online</div>
    </div>
    </div>
    </>
  )
}

export default RestaurantCard