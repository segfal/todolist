import { ToDoActionTypes } from "./actionTypes";



export const initialState = {
    tasks: [],
    task: {},
};



const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ToDoActionTypes.ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            };
        case ToDoActionTypes.REMOVE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            };
        case ToDoActionTypes.TOGGLE_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task => task.id === action.payload ? { ...task, complete: !task.complete } : task)
            };
        default:
            return state;
    }
}


export default rootReducer;