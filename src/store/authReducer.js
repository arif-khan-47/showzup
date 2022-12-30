import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
}


const rootReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        checkLogin(state) {

            state.isAuthenticated = true;


        },
        logout(state) {
            // state.user = null;
            state.isAuthenticated = false;
        },
    }

})
export const { checkLogin, logout } = rootReducer.actions;
export default rootReducer.reducer;