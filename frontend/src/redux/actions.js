import { ToDoActionTypes } from "./actionTypes";



export const addTask = (task) => ({
    type: ToDoActionTypes.ADD_TASK,
    payload: task
});

export const removeTask = (id) => ({
    type: ToDoActionTypes.REMOVE_TASK,
    payload: id
});

export const toggleTask = (id) => ({
    type: ToDoActionTypes.TOGGLE_TASK,
    payload: id
});

export const setTasks = (tasks) => ({
    type: ToDoActionTypes.SET_TASKS,
    payload: tasks
});

