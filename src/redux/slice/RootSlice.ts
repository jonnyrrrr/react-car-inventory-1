import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name: "root",
    initialState : {
        name: "Name",
        email: 'Email',
        phone_number : 'Phone Number',
        Model : 'Model',
    },
    reducers : {
        // Action is submitted elsewhere,  - written to state.name
       chooseName: (state, action) => {state.name = action.payload},
       chooseEmail: (state, action) => {state.email = action.payload},
       choosePhone: (state, action) => {state.phone_number = action.payload},
       chooseModel: (state, action) => {state.Model = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const {chooseModel, chooseName, chooseEmail, choosePhone } = rootSlice.actions;