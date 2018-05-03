import { combineReducers } from 'redux';

const submitEmployee = (state = [], action) => {
    switch(action.type){
        case ('SUBMIT_EMPLOYEE'):
            return [...state, action.payload];
        case ('DELETE_EMPLOYEE'):
            let index = state.indexOf(action.payload);
            state.splice(index, 1);
        default:
            return state;
    }
}

export default combineReducers({
    submitEmployee,
})