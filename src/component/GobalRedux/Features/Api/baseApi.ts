import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define the baseQuery using fetchBaseQuery
const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000",
  //   credentials: "include",
});

// Create the base API slice using the enhanced baseQueryWithRefreshToken
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  tagTypes: ["expense"],
  endpoints: () => ({}),
});
