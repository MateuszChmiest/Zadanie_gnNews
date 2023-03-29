import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./views/Root/Root";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import {newsApi} from "./store/newsApiSlice";
import './i18next';

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<ApiProvider api={newsApi}>
				<BrowserRouter>
					<Root />
				</BrowserRouter>
			</ApiProvider>
		</Provider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
