/* eslint-disable no-unused-vars */
import { useState ,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask,removeTask } from './redux/actions'
import {ShowTodoList} from './TodoList'


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
    if(task === undefined){
      return
    }
    dispatch(removeTask(task))
  }

  useEffect(() => {
    setTaskList(todoList)
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
      {ShowTodoList(taskList)}
      
    </div>
  )
}

export default App;