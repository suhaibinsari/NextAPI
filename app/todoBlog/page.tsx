'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Page() {

    const [singleTodo, setSingleTodo] = useState([])
    const [loader, setLoader] = useState(false)
    const [update, setUpdate] = useState(false)
    const getSingleTodo = async() =>{
        try{
            setLoader(true)
          const singleResult = await axios.get('https://dummyjson.com/todos?limit=3&skip=10')
            console.log('sl' , singleResult.data.todos)
            setSingleTodo(singleResult.data.todos)
        } catch (error) {
            console.log('error', error)
        }
        finally{
            setLoader(false)
        }
    }
    useEffect(()=>{
        getSingleTodo()
    },[update])


const reFetch = () =>{
    setUpdate(true)
    alert('aa')
}

  return (
    <div className='text-white'>
        <button className='px-4' onClick={getSingleTodo}>get</button>
        <button onClick={reFetch}>Refetch</button>
        {loader && 'loading...'}
        {singleTodo.map((todo)=>{
            return(
                <div key={todo}>
                    {todo.id}
                    {todo.todo}
                </div>
            )
        })}
    </div>
  )
}