import { baseApi } from "../Api/baseApi";

const ExpenseApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addExpenseApi: builder.mutation({
      query: (args) => {
        console.log(args);
        return {
          url: `/expenses`,
          method: "POST",
          body: args,
        };
      },
      invalidatesTags: ["expense"],
    }),
    getSummary: builder.query({
      query: (args) => {
        return {
          url: `/expenses/summary/${args}`,
          method: "GET",
        };
      },
      providesTags: ["expense"],
    }),
  }),
});

export const { useAddExpenseApiMutation, useGetSummaryQuery } = ExpenseApi;
