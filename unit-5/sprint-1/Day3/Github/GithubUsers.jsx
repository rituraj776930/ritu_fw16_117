import React from 'react'
import axios from 'axios'

const GithubUsers = (q="gyani",page = 1) => {
  return axios("https://api.github.com/search/users",{
      method:"GET",
      params:{
          q,
          per_page:5,
          page
      }
  })
}

export default GithubUsers
