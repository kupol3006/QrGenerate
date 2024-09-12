import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setCookie, destroyCookie, parseCookies } from 'nookies';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_KEY;

export const postFormBuilderAsync = createAsyncThunk(
    'formBuilder/postFormBuilder',
    async (formData) => {
        try {
            const token = parseCookies()['token'];
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            const response = await axios.post(`${API_BASE_URL}FormBuilder/create`, formData);

            if (response.status === 200) {
                console.log('Form created successfully');
            } else {
                console.log('Form creation failed: ', response.statusText);
            }

            return response.data;
        } catch (error) {
            return error;
        }
    },
);

export const postFormUserDataAsync = createAsyncThunk(
    'formBuilder/postFormUserData',
    async (formData) => {
        try {
            const token = parseCookies()['tokenEndUser'];
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            const response = await axios.post(`${API_BASE_URL}FormSubmission/submit`, formData);

            if (response.status === 200) {
                console.log('Form created successfully');
            } else {
                console.log('Form creation failed: ', response.statusText);
            }

            return response.data;
        } catch (error) {
            return error;
        }
    },
);

export const putScanCountAsync = createAsyncThunk(
    'formBuilder/putScanCount',
    async (id) => {
      try {
        const token = parseCookies()['token'];
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        const response = await axios.put(`${API_BASE_URL}FormBuilder/${id}/increment-scan`);
        return response.data;
      } catch (error) {
        console.error('Error incrementing scan count:', error);
        throw error;
      }
    }
  );

export const getFormBuilderAsync = createAsyncThunk(
    'formBuilder/getFormBuilder',
    async (id, { rejectWithValue }) => {
      try {
        const token = parseCookies()['tokenEndUser'];
        const response = await axios.get(`${API_BASE_URL}FormBuilder/${id}/file`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
  
        return response.data; // assuming you need to return the data
      } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
      }
    }
  );


const initialState = {
    token: null,
    isLoading: false,
    data: [],
    dataCreate: [],
    dataForm: [],
    dataScanCount: [],
};

export const formBuilderSlice = createSlice({
    name: 'formBuilder',
    initialState,
    reducers: {
        setData(state, action) {
            state.data = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(postFormBuilderAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(postFormBuilderAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.dataCreate = action.payload;
            })
            .addCase(postFormBuilderAsync.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(getFormBuilderAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getFormBuilderAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.dataForm = action.payload;
            })
            .addCase(getFormBuilderAsync.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(putScanCountAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(putScanCountAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.dataScanCount = action.payload;
            })
            .addCase(putScanCountAsync.rejected, (state) => {
                state.isLoading = false;
            })
    },
});

export const { setData } = formBuilderSlice.actions;

export default formBuilderSlice.reducer;