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
        }),
        searchMovie: builder.query({
          query: (args) => {
            const {search = ""} = args
              return {
                url: `/search?term==${search}&country=au&media=movie&all`,
              };
            },
      })
      
    }),
    overrideExisting: false,
});

export const {useGetAllMovieQuery, useSearchMovieQuery} = movieApi