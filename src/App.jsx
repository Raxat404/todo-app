import { useReducer } from 'react'
import { createContext } from 'react'
import './index.css'
import Todos from './components/Todos'

export const TodosContent = createContext()
 
const initialState = {
  todos: [],
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_TODOS':
      return {
        ...state,
        todos: action.payload,
      }
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      }
    default:
      return state
  }
}

function App() {
  const [data, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <TodosContent.Provider value={{ data, dispatch }}>
        <Todos />
      </TodosContent.Provider>
    </>
  )
}

export default App
