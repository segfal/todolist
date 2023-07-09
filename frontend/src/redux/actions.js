import { ToDoActionTypes } from "./actionTypes";


//add task
export const addTask = (task) => ({
    type: ToDoActionTypes.ADD_TASK,
    payload: task
});

//Remove task
export const removeTask = (id) => ({
    type: ToDoActionTypes.REMOVE_TASK,
    payload: id
});

//Set tasks
export const setTasks = (tasks) => ({
    type: ToDoActionTypes.SET_TASKS,
    payload: tasks
});

