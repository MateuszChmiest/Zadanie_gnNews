import { configureStore } from "@reduxjs/toolkit";
import { newsApi } from "./newsApiSlice";
import newsViewSlice from "./newsViewSlice";

export const store = configureStore({
	reducer: {
		[newsApi.reducerPath]: newsApi.reducer,
		newsView: newsViewSlice,
	},
	middleware: (getDefaultMiddleware) =>
	getDefaultMiddleware().concat(newsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;