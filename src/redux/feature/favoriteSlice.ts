import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { GenreMovieType } from "../../screens/Dashboard/MoviesByGenre";
import { findIndex } from "lodash";


type MovieState = {
    favorite: Array<GenreMovieType>
  
  };
const initialState:MovieState  = {
    favorite: [],
};

const slice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
      setFavorite: (state, {payload: {movie}} ) => {
        const genreIndex = state.favorite.findIndex((g) => g.genre === movie?.primaryGenreName);
        if (genreIndex !== -1) {
          const existingMovieIndex = findIndex(state.favorite[genreIndex].items, { trackId: movie?.trackId });
          console.log
          // If the movie with the same trackId exists, remove it
          if (existingMovieIndex !== -1) {
            state.favorite[genreIndex].items.splice(existingMovieIndex, 1);
          }else{
              state.favorite[genreIndex].items.push(movie);
          }
      
        
        }else{
          state.favorite.push({
            genre: movie?.primaryGenreName,
            items: [movie],
          });
        }
      }
    },
    
  });

  export const { setFavorite} =slice?.actions

  export default slice.reducer;


  export const currentFavorite = (state: RootState)  => state.favorites