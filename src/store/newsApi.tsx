import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const newsApi = createApi({
	reducerPath: "newsApi",
	baseQuery: fetchBaseQuery({ baseUrl: "" }),
	endpoints: (builder) => ({
		getAllNews: builder.query({
			query: (id: string) => 
				`https://newsapi.org/v2/top-headlines?country=${id}&apiKey=aa6487f7ab11494c9e711249a1962159`,
		}),
	}),
});

export const { useGetAllNewsQuery } = newsApi;
