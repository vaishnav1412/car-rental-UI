import { createSlice } from "@reduxjs/toolkit";

const initialState={
    currentAdmin:null,
    error:null,
    loading:false,
}

const adminSlice = createSlice({
    name:"admin",
    initialState,
    reducers:{
        adminSignInStart:(state)=>{
            state.loading = true;
        },
        adminSiginSuccess:(state,action)=>{
            state.currentAdmin=action.payload
            state.loading=false;
            state.error=null;
        },
        adminSignInFailure:(state,action)=>{
            state.loading = false;
            state.error=action.payload
        }
    }
})

export const { adminSignInStart, adminSiginSuccess, adminSignInFailure}=adminSlice.actions

export default adminSlice.reducer;