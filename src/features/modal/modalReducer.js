import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // data: null,
    isOpenModal: false
}

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        open: (state) => {
            state.isOpenModal = true
        },
        close: (state) => {
            state.isOpenModal = false
        },
        // toggleModal : (state) => !state.isOpenModal
    }
})

export const {open, close} = modalSlice.actions

export const getModalData = state => state.modal


export default modalSlice.reducer