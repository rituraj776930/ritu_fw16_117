import React from 'react'
import "./Card.css"
const Card = ({date, heading, subheading, devices, logo})=>{
    return(
        <div className='main-div'>
            <div className='inner-div'>
                <h2>{date}</h2>
                <img className='img' src={logo} alt="" />
            </div>
            <div className='text'> <h3 style={{color : "white" , paddingTop : "10px"}}>Case Study</h3></div>
            <h1 className='text1'>{heading}</h1>
            <h1 className='text1'>{subheading}</h1>
            <div className='inner-div'>
                <h1>{devices}</h1>
                <img className='img' src="https://www.kindpng.com/picc/m/256-2568455_feather-arrows-arrow-right-back-and-forward-icon.png" alt="" />
            </div>

        </div>
    )
}
export default Card