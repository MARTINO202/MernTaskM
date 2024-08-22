// src/store/taskSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
    const response = await axios.get('http://localhost:5000/api/tasks');
    return response.data;
});

export const addTask = createAsyncThunk('tasks/addTask', async (task) => {
    const response = await axios.post('http://localhost:5000/api/tasks', task);
    return response.data;
});

export const updateTask = createAsyncThunk('tasks/updateTask', async ({ id, task }) => {
    const response = await axios.put(`http://localhost:5000/api/tasks/${id}`, task);
    return response.data;
});

export const deleteTask = createAsyncThunk('tasks/deleteTask', async (id) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    return id;
});

const taskSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.fulfilled, (state, action) => {
                return action.payload;
            })
            .addCase(addTask.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(updateTask.fulfilled, (state, action) => {
                const index = state.findIndex(task => task._id === action.payload._id);
                state[index] = action.payload;
            })
            .addCase(deleteTask.fulfilled, (state, action) => {
                return state.filter(task => task._id !== action.payload);
            });
    },
});

export default taskSlice.reducer;