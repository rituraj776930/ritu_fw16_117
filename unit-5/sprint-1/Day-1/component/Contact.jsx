import React, { useState } from 'react'
import ContactCard from './ContactCard'

const initstate = [
    {
        id : 1 ,
        name : "Ritu Raj Singh" ,
        phone : 9840404214 ,
        email : "rrs984040@gmail.com",
        image : "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        id : 2 ,
        name : "Satyajeet Sahoo" ,
        phone : 9121212122 ,
        email : "satyajeeet@gmail.com",
        image : "https://image.shutterstock.com/image-photo/portrait-happy-mid-adult-man-260nw-1812937819.jpg"
    },
    {
        id : 3 ,
        name : "Gyan Prakash Mishra" ,
        phone : 8928867436 ,
        email : "gyan@gmail.com",
        image: "https://media.gettyimages.com/photos/studio-waist-up-portrait-of-a-beautiful-businesswoman-with-crossed-picture-id1180926773?s=612x612"
    },
    {
        id : 4 ,
        name : "Preeti Sabrawal" ,
        phone : 9765657893 ,
        email : "preeti@gmail.com",
        image : "https://upload.wikimedia.org/wikipedia/commons/2/2b/Jessica_Ennis_%28May_2010%29_cropped.jpg"
    }
]
function Contact() {
    const [data , setdata] = useState(initstate)
  return (
      <>
      <div>
        <input type="text" onChange={()=>handleChange(e.target.value)}/>
        <button>Click me to add user</button>
      </div>
      
      <hr />
      <div>
        {data.map((elem) =>( 
        <ContactCard 
            key = {elem.id} 
            id = {elem.id}
            name = {elem.name} 
            phone = {elem.phone} 
            email = {elem.email}  
            image = {elem.image}/>
        ))}
      </div>
      </>
  )
}

export default Contact