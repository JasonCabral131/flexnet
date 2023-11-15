import { createSlice } from "@reduxjs/toolkit";
import { movieApi } from "../services/movieApi";
import { RootState } from "../store";

export type MovieType = {
    "wrapperType": string
    "kind": string
    "collectionId": string | number
    "trackId":string | number
    "artistName": string
    "collectionName": string
    "trackName":string
    "collectionCensoredName": string
    "trackCensoredName": string
    "collectionArtistId":string | number
    "collectionArtistViewUrl":string
    "collectionViewUrl": string
    "trackViewUrl":string
    "previewUrl":string
    "artworkUrl30": string
    "artworkUrl60": string
    "artworkUrl100": string
    "collectionPrice": string | number
    "trackPrice": string | number
    "trackRentalPrice":string | number
    "collectionHdPrice": string | number
    "trackHdPrice":string | number
    "trackHdRentalPrice": string | number
    "releaseDate":  string
    "collectionExplicitness":  string
    "trackExplicitness":  string
    "trackCount": string | number
    "trackNumber": string | number
    "trackTimeMillis": string | number
    "country": string
    "currency": string
    "primaryGenreName": string,
    "contentAdvisoryRating": string,
    "shortDescription"?: string
    "longDescription"?: string
    "hasITunesExtras"?: boolean
 }
type MovieState = {
    loading: boolean,
    movies:  Array<MovieType>;
    movieCount: number
  };
const initialState:MovieState  = {
    loading: false,
    movies: [],
    movieCount: 0
};

const slice = createSlice({
    name: "auth",
    initialState,
    reducers: {
     
    },
    extraReducers: (builder) => {
      builder.addMatcher(
        movieApi.endpoints.getAllMovie.matchFulfilled,
        (state, { payload }) => {
          state.loading = false
          state.movies = payload.results;
          state.movieCount = payload.resultCount;
        }
      );
  
    },
  });


  export default slice.reducer;


  export const currentMovies = (state: RootState)  => state.movie.movies