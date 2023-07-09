import { ToDoActionTypes } from "./actionTypes";



export const initialState = {
    tasks: [],
    task: {},
};



const rootReducer = (state = initialState, action) => {
    console.log(state.tasks,action.payload,state.task);
    switch (action.type) {
        case ToDoActionTypes.ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            };
        case ToDoActionTypes.REMOVE_TASK:
           
            return {
                ...state,//remove the name of task from the array
                tasks: state.tasks.filter(task => {
                    //console.log(task)
                    console.log(action.payload)
                    return task !== action.payload
                })
            };

        default:
            return state;
    }
}


export default rootReducer;