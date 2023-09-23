import { combineReducers } from "redux";
import { ADD_TASK, DELETE_TASK, UPDATE_TASK } from "../actions/types";

// import addTaskReducer from "./addTaskReducer";

const Tasks = [{ name: 'GYM', time: '06:00', id: 1, status: 'C' }];

const TaskReducer = (state = Tasks, action) => {
    switch (action.type) {
        case ADD_TASK:
            return [...state, action.payload];
        case UPDATE_TASK:
            const updatedState = state.map(task => {
                if (task.id === action.payload.id) {
                    return { ...task, status: action.payload.status };
                }
                return task;
            })
            return updatedState;
        case DELETE_TASK:
            const deletedState = state.filter(task => { return task.id !== action.payload })
            return deletedState;
        default:
            return state;
    }
}

export default combineReducers({
    Tasks: TaskReducer
})