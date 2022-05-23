import React from 'react'

const GithubCard = (props) => {
   const {login,avatar_url}=props
  return (
    <div id='container'>
       
        <div id='imgdiv'><img src={avatar_url} alt="" /></div>
        <div id='login'><h1>{login}</h1></div>
      
    </div>
  )
}

export default GithubCard
