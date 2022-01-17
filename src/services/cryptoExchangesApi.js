import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "x-rapidapi-host": "coinlore-cryptocurrency.p.rapidapi.com",
  "x-rapidapi-key": "4j71FF4bIkmshj8MmpUuw6dYzFJzp1oaS9OjsnWSjSNLnyJjzu",
};

const baseUrl = "https://coinlore-cryptocurrency.p.rapidapi.com/api/";

const createRequest = (url) => ({
  url,
  headers: cryptoApiHeaders,
});

export const cryptoExchangesApi = createApi({
  reducerPath: "cryptoExchangesApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getExhanges: builder.query({
      query: () => createRequest("exchanges"),
      providesTags: (res) => {
        console.log(res);
      },
    }),
  }),
});

export const { useGetExchangesQuery } = cryptoExchangesApi;
