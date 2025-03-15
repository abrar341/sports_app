import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
import { SERVER_URL } from '../utils/constants';

const baseQuery = fetchBaseQuery({ baseUrl: SERVER_URL });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['User'],
  endpoints: (builder) => ({}),
});