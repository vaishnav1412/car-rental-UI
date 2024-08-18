import { createSlice } from "@reduxjs/toolkit";

const initialState={
    currentUser:null,
    error:null,
    loading:false,
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        signInStart:(state)=>{
            state.loading = true;
        },
        siginSuccess:(state,action)=>{
            state.currentUser=action.payload
            state.loading=false;
            state.error=null;
        },
        signInFailure:(state,action)=>{
            state.loading = false;
            state.error=action.payload
        }
    }
})

export const {signInStart,siginSuccess,siginFailure}=userSlice.actions

export default userSlice.reducer;