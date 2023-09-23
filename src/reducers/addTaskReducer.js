import { ADD_TASK } from "../actions/types";

export default (state = [{ name: 'Cardio', time: '06:00' }], action) => {
    console.log(state)
    console.log(action, ' red')
    switch (action.type) {
        case ADD_TASK:
            return [...state, action.payload];
        default:
            return state;
    }
}