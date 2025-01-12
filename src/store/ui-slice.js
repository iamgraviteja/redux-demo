import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
    name: 'ui',
    initialState: { cartIsVisible: false, mode: matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light' },
    reducers: {
        toggleCart: (state) => {
            state.cartIsVisible = !state.cartIsVisible;
        },
        toggleMode: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        }
    }
});

export const { toggleCart, toggleMode } = uiSlice.actions;
export default uiSlice;