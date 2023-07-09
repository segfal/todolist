/* eslint-disable no-unused-vars */
import { useState ,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask,removeTask,toggleTask } from './redux/actions'
import { initialState } from './redux/reducer'

const showTodoList = (todoList) => {
  if (todoList === undefined) {
    return (
      <div>
        No todo list
      </div>
    )
  }
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
  const todoList = useSelector(state => state.tasks)
  const dispatch = useDispatch()
  const [task, setTask] = useState('')
  const [taskList, setTaskList] = useState([])

  const handleAddTask = () => {
    dispatch(addTask(task))
    setTask('')
  }

  const handleRemoveTask = () => {
    dispatch(removeTask())
  }


  const handleToggleTask = () => {
    dispatch(toggleTask())
  }

  useEffect(() => {
    setTaskList(todoList)
    console.log(todoList)
  }
  , [todoList])

  

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        onClick={handleAddTask}
      >
        Add task
      </button>
      <button
        onClick={handleRemoveTask}
        
      >
        Remove task
      </button>
      <button
        onClick={handleToggleTask}
       
      >
        Toggle task
      </button>
    
      {showTodoList(todoList)}
      
    </div>
  )




  
}



export default App;