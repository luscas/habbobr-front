import {TOGGLE_MODAL, HIDE_MODAL, SHOW_MODAL} from '../actions/modalActions';

const modalReducer = (state = {value: false}, action) => {
    switch (action.type) {
        case SHOW_MODAL:
            return {...state, value: true};
        case HIDE_MODAL:
            return {...state, value: false};
        case TOGGLE_MODAL:
            return {...state, value: state.value = !state.value};
        default:
            return {...state};
    }
};

export default modalReducer;