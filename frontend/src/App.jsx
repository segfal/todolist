/* eslint-disable no-unused-vars */
import { useState ,useEffect} from 'react'



const showTodoList = (todoList) => {
  if (todoList.length > 0) {
    return (
      <ul>
        {todoList.map((todo, index) => {
          return (
            <li key={index}>
              {todo}
            </li>
          )
        })}
      </ul>
    )
  } else {
    return (
      <div>
        No todo list
      </div>
    )
  }
}



const App = () => {
  const [todoList, setTodoList] = useState([])
  return (
    <div>

    </div>
  )
}



export default App;