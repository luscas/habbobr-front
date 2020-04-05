import {DECREMENT_COUNTER, INCREMENT_COUNTER} from '../actions/counterActions';

const counterReducer = (state = {value: 0}, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return {...state, value: state.value < 10 ? state.value + 1 : state.value};
        case DECREMENT_COUNTER:
            return {...state, value: state.value > 0 ? state.value - 1 : state.value};
        default:
            return {...state};
    }
};

export default counterReducer;