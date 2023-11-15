import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { itunes } from "../../constant";
export const reduxApi = createApi({
    reducerPath: 'reduxApi',
    tagTypes: [
        'movie',
    ],
    baseQuery: fetchBaseQuery({
        baseUrl: itunes,
        prepareHeaders: (headers, {getState}) => {
            // to do when adding header ex: token from state
            return headers;
        }
    }),
    endpoints:() => ({})
})