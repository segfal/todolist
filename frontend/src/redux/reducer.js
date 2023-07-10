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
                ...state,//remove the name of task from the array
                tasks: state.tasks.filter(task => {
                    
                   
                    return task !== action.payload
                })
            };

        default:
            return state;
    }
}


export default rootReducer;