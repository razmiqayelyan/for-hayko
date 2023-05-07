import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: null,
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
        }
    }
})

export const {open, close} = modalSlice.actions

export default modalSlice.reducer