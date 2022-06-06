import React from 'react'

function PostItem({item}) {
  return (
    <div>
        <div style={{display:"flex", gap:"30px",justifyContent:"center",backgroundColor:"tomato",marginBottom:"5px",borderRadius:"10px"}}>
                <h3>{item.id}</h3>
                <h3>{item.title}</h3>
                </div>
    </div>
  )
}

export default PostItem