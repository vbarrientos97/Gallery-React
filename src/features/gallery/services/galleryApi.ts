import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Album, Photo, User } from 'types';

export const galleryApi = createApi({
    reducerPath: 'galleryApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: builder => ({
        getAllAlbums: builder.query<Album[], void>({
            query: () => 'albums',
        }),
        getAllPhotos: builder.query<Photo[], void>({
            query: () => 'photos',
        }),
        getAllUsers: builder.query<User[], void>({
            query: () => 'users',
        }),
    }),
});

export const { useGetAllAlbumsQuery, useGetAllPhotosQuery, useGetAllUsersQuery } = galleryApi;
