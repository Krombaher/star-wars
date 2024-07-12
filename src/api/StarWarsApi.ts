import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GetPeopleQuery, StarWarsCharacter, StarWarsResponse } from './starWarsApiTypes';

const BASE_URLS = {
  baseUrl: 'https://swapi.dev/api/',
};

export const starWarsApi = createApi({
  reducerPath: 'starWarsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URLS.baseUrl }),
  endpoints: builder => ({
    getPeople: builder.query<StarWarsResponse, GetPeopleQuery>({
      query: ({ search = '', page = 1 }) => ({
        url: `people?search=${search}&page=${page}`,
        method: 'GET',
      }),
    }),
    getPerson: builder.query<StarWarsCharacter, number>({
      query: id => ({
        url: `people/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetPeopleQuery, useGetPersonQuery } = starWarsApi;