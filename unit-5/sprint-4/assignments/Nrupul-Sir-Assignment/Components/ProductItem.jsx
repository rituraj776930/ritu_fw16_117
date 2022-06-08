import React from 'react'

function ProductItem({item}) {
  return (
    
        <div style={{height:"350px" , width:"300px",border:"1px solid black"}}>
                <img style={{width:"100%" , height:"65%"}} src={item.image_url} alt="" />
                <h3>{item.name}</h3>
                <h3>Price:{item.price}</h3>
        </div>
    
  )
}

export default ProductItem