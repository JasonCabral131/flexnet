import { reduxApi } from "./reduxApi";


export const movieApi = reduxApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllMovie: builder.query({
            query: () => {
                return {
                  url: "/search?term=star&country=au&media=movie&all",
                };
              },
              providesTags: ["movie"],
        })
      
    }),
    overrideExisting: false,
});

export const {useGetAllMovieQuery} = movieApi