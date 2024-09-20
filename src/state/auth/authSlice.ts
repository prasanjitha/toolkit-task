import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
    isAuthenticated: boolean;
    isLoading: boolean;
    errorMessage: string;
}

const initialState: AuthState = {
    isAuthenticated: false,
    isLoading: false,
    errorMessage: "",
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state) => {
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.isAuthenticated = false;
        },
        userSignIn:(state, action) => {
            state.isLoading = true;
            const { email, password } = action.payload; 
                if (email === "kamal@gmail.com" && password === "123456") {
                    state.isAuthenticated = true;
                    state.errorMessage = "";
                    state.isLoading = false;
                }else{
                    state.errorMessage ="Invalid credential !"
                    state.isLoading = false;
                }

        }
    },
});

export const { login, logout , userSignIn } = authSlice.actions;
export default authSlice.reducer;