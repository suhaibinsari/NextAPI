'use client'
import axios from 'axios';
import React, { useState } from 'react';

export default function Page() {
    const [todos, setTodos] = useState([]);

    const getTodos = async () => {
        try {
            const result = await axios.get('https://dummyjson.com/todos');
            setTodos(result.data.todos);
        } catch (error) {
            console.log('error', error);
        }
    };

    return (
        <div className="container mx-auto">
            {/* Header */}
            <header className="bg-gray-800 text-white py-4 px-4">
                <div className="container flex justify-between items-center">
                    <h1 className="text-2xl font-semibold">Todos</h1>
                    <button onClick={getTodos} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                        Get todos
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <div className="grid grid-cols-3 gap-4 mt-8">
                {/* Sidebar */}
                <aside className="col-span-1">
                    <h2 className="text-lg font-semibold mb-4">Categories</h2>
                    <ul>
                        <li className="text-blue-500 hover:text-blue-600 cursor-pointer">Category 1</li>
                        <li className="text-blue-500 hover:text-blue-600 cursor-pointer">Category 2</li>
                        <li className="text-blue-500 hover:text-blue-600 cursor-pointer">Category 3</li>
                        {/* Add more categories */}
                    </ul>
                </aside>

                {/* Products */}
                <div className="col-span-2">
                    <h2 className="text-lg font-semibold mb-4">Todo List</h2>
                    <div className="grid grid-cols-3 gap-4">
                        {todos.map((todo) => (
                            <div key={todo.id} className="border p-4 rounded-md shadow-md">
                                <h3 className="text-lg font-semibold">{todo.todo}</h3>
                                <p className="text-gray-500">ID: {todo.id}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-4 mt-8">
                <div className="container text-center">
                    <p>&copy; 2024 Todos. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
