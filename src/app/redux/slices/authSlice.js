import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { setCookie, destroyCookie } from 'nookies';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_KEY;

export const loginAsync = createAsyncThunk(
    'auth/login',
    async ({ email, password }) => {
        const auth = { email, password };
        try {
            const response = await axios.post(API_BASE_URL + 'Users/login', auth);
            if (response.data.token) {
                const token = response.data.token;
                setCookie(null, 'token', token, {
                    maxAge: 7 * 24 * 60 * 60,
                    path: '/',
                });
            }
            return response.data;
        } catch (error) {
            console.error('Error logging in:', error);
            throw error;
        }
    },
)

export const loginGoogleAsync = createAsyncThunk(
    'auth/loginGoogle',
    async (tokenResponse) => {
        try {
            const loginResponse = await axios.post(API_BASE_URL + 'Users/loginByGoogle', {
                token: tokenResponse
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (loginResponse.data.token) { 
                const token = loginResponse.data.token;
                setCookie(null, 'token', token, {
                    maxAge: 7 * 24 * 60 * 60,
                    path: '/',
                });
            }
            return loginResponse.data;
        } catch (error) {
            console.error('Error logging in with Google:', error);
            throw error;
        }
    },
);

export const loginGoogleEndUserAsync = createAsyncThunk(
    'auth/loginGoogleEndUser',
    async (tokenResponse) => {
        try {
            const loginResponse = await axios.post(API_BASE_URL + 'EndUser/loginByGoogle', {
                token: tokenResponse
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (loginResponse.data.token) { 
                const token = loginResponse.data.token;
                setCookie(null, 'tokenEndUser', token, {
                    maxAge: 7 * 24 * 60 * 60,
                    path: '/',
                });
            }
            return loginResponse.data;
        } catch (error) {
            console.error('Error logging in with Google:', error);
            throw error;
        }
    },
);

export const registerAsync = createAsyncThunk(
    'auth/register',
    async ({ email, password }) => {
        const auth = { email, password };
        const response = await axios.post(API_BASE_URL + 'auth/login', auth);
        const token = response.data.access_token;
        return response.data;
    },
)

export const logoutAsync = createAsyncThunk(
    'auth/logout',
    async () => {
        try {
            const response = await axios.post(API_BASE_URL + 'Users/logout');
            destroyCookie(null, 'token');
            return response.data;
        } catch (error) {
            console.error('Error logging out:', error);
            throw error;
        }
    },
)

const initialState = {
    data: null,
    isLoading: false,
    error: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(loginAsync.pending, (state) => {
        state.isLoading = false
    })
    .addCase(loginAsync.fulfilled, (state, action) => {
        state.isLoading = true
        state.data = action.payload
    })
    .addCase(loginAsync.rejected, (state) => {
        state.isLoading = false
    })
    .addCase(loginGoogleAsync.pending, (state) => {
        state.isLoading = false
    })
    .addCase(loginGoogleAsync.fulfilled, (state, action) => {
        state.isLoading = true
        state.data = action.payload
    })
    .addCase(loginGoogleAsync.rejected, (state) => {
        state.isLoading = false
    })
    .addCase(registerAsync.pending, (state) => {
        state.isLoading = false
    })
    .addCase(registerAsync.fulfilled, (state, action) => {
        state.isLoading = true
        state.data = action.payload
    })
    .addCase(registerAsync.rejected, (state) => {
        state.isLoading = false
    })
    .addCase(logoutAsync.pending, (state) => {
        state.isLoading = false
    })
    .addCase(logoutAsync.fulfilled, (state, action) => {
        state.isLoading = true
        state.data = action.payload
    })
    .addCase(logoutAsync.rejected, (state) => {
        state.isLoading = false
    })
    .addCase(loginGoogleEndUserAsync.pending, (state) => {
        state.isLoading = false
    })
    .addCase(loginGoogleEndUserAsync.fulfilled, (state, action) => {
        state.isLoading = true
        state.data = action.payload
    })
    .addCase(loginGoogleEndUserAsync.rejected, (state) => {
        state.isLoading = false
    })
  },
})

// Action creators are generated for each case reducer function
export const { } = authSlice.actions

export default authSlice.reducer