import React, { useContext, useEffect } from "react"
import { TodosContent } from '../App'

const Todos = () => {
  const { data, dispatch } = useContext(TodosContent)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "FETCH_TODOS", payload: data })
      })
      .catch((error) => {
        console.error("Error fetching todos:", error)
      })
  }, [dispatch])

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id })
  }

  console.log(data)

  return (
    <div className="w-[80%] mx-auto my-12">
      <h1 className="text-2xl font-bold mb-4 text-center">Todo List</h1>
      <ul className="space-y-2 flex flex-wrap gap-1">
        {data.todos.map((todo) => (
          <li
          key={todo.id}
          className="flex w-[300px] items-center justify-between bg-white p-4 shadow-md rounded-md"
          >
            <span>{todo.id}. {todo.title}</span>
            <button
              className="ml-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
              onClick={() => handleDelete(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todos
