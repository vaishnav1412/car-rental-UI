import { createSlice } from "@reduxjs/toolkit";

const initialState={
    updatedPrice:0,
}


const priceSlice= createSlice({
    name:"price",
    initialState,
    reducers:{
        setUpdatedPrice:(state,action)=>{
            state.updatedPrice = action.payload;
        },
    },
});


export const { setUpdatedPrice } = priceSlice.actions;

export default priceSlice.reducer;