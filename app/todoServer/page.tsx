// import axios from 'axios'

// const getTodos = async () => {
//     try {
//         const singleResult = await axios.get('https://dummyjson.com/todos?limit=3&skip=10')
//         console.log('sl', singleResult.data.todos)
//         return singleResult.data.todos
//     } catch (error) {
//         console.log('error', error)
//     }
// }

// export default async function Page() {

//     const todos = await getTodos()

//     return (
//         <div className='text-white'>
//             {/* <button className='px-4' onClick={getSingleTodo}>get</button>
//         <button onClick={reFetch}>Refetch</button> */}
//             {/* {loader && 'loading...'} */}
//             {todos.map((todo) => {
//                 return (
//                     <div key={todo}>
//                         {todo.id}
//                         {todo.todo}
//                     </div>
//                 )
//             })}
//         </div>
//     )
// }


///// axios method




const getTodos = async () => {
    try {
        const singleResult = await fetch('https://dummyjson.com/todos?limit=3&skip=10')
        const data = await singleResult.json()
        return data.todos
    } catch (error) {
        console.log('error', error)
    }
}

export default async function Page() {

    const todos = await getTodos()

    return (
        <div className='text-white'>
            {/* <button className='px-4' onClick={getSingleTodo}>get</button>
        <button onClick={reFetch}>Refetch</button> */}
            {/* {loader && 'loading...'} */}
            {todos.map((todo) => {
                return (
                    <div key={todo}>
                        {todo.id}
                        {todo.todo}
                    </div>
                )
            })}
        </div>
    )
}

