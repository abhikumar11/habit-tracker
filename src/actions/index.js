import { ADD_TASK, DELETE_TASK, UPDATE_TASK } from './types';


export const addTask = (task) => {
    return ({
        type: ADD_TASK,
        payload: task
    });
}

export const updateTask = (status, id) => {
    return ({
        type: UPDATE_TASK,
        payload: {
            id: id,
            status: status
        }
    })
}

export const deleteTask = (id) => {
    return {
        type: DELETE_TASK,
        payload: id
    }
}