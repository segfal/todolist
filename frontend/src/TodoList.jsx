

const ShowTodoList = (todoList) => {
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
  
export {ShowTodoList};