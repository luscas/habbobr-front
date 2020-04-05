//Action Types
export const SHOW_MODAL = "SHOW_MODAL";
export const HIDE_MODAL = "HIDE_MODAL";
export const TOGGLE_MODAL = "TOGGLE_MODAL";


//Action Creator
export const showModal = () => ({
   type: SHOW_MODAL
});

export const hideModal = () => ({
    type: HIDE_MODAL
});

export const toggleModal = () => ({
    type: TOGGLE_MODAL
});