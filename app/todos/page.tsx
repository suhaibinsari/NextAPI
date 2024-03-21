'use client'

import axios from 'axios'
import React from 'react'



//https://dummyjson.com/todos

export default function page() {

    const getTodos = async ()=>{
        try{
         const result =  await axios.get('https://dummyjson.com/todos');
         console.log('data from api', result)
        }
        catch (error) {
            console.log('error', error)
        }
    }



  return (
    <div>
      <button onClick={getTodos}>Get todos</button>
    </div>
  )
}
