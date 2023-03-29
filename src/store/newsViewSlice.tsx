import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

const newsViewSlice = createSlice({
    name: 'newsView',
    initialState: {
        view: false,
    },
    reducers: {
        changeNewsView( state, action: PayloadAction<boolean>) {
            state.view = action.payload;
        }
    }
});

export default newsViewSlice.reducer;
export const {changeNewsView} = newsViewSlice.actions;
export const selectView = (state: RootState) => state.newsView.view;