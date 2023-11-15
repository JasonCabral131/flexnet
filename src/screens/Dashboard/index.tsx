import React, { useEffect } from 'react'
import BaseScreen from '../../components/BaseScreen'
import { useGetAllMovieQuery } from '../../redux/services/movieApi'
import { Colors } from '../../constant/colors'
import { isArray } from "lodash"
import { Box, ScrollView } from 'native-base'
import Top10Movies from './Top10Movies'
import MoviesByGenre, { GenreMovieType } from './MoviesByGenre'
import Heading from './Heading'
const Dashboard = () => {
  const {data, isLoading, error} = useGetAllMovieQuery({})
  const results = data?.results || []
  const genreMap: any = {};
  if(isArray(results)){
    results.forEach((item: any) => {
      const genre = item.primaryGenreName;
    
      if (!genreMap[genre]) {
        // If the genre doesn't exist in the map, create a new array for it
        genreMap[genre] = [];
      }
    
      // Push the item to the corresponding genre array
      genreMap[genre].push(item);
    });
  }
  const resultByGenre = Object.entries(genreMap).map(([genre, items]) => ({
    genre,
    items,
  })) as Array<GenreMovieType>
    const sortedData = results.slice().sort((a: any, b: any) => {
      const trackCountA = a.trackCount || 0;
      const trackCountB = b.trackCount || 0;
    
      return trackCountB - trackCountA;
    });
  // Get the top 5 items
  const top10Items = sortedData.slice(0, 5);

  
  return (
   <BaseScreen fullScreen backgroundColor={Colors.black}>
     <Box flex={1}>
     <Heading />
      <ScrollView flex={1} showsVerticalScrollIndicator={false}>
         <Top10Movies data={top10Items}/>
         <MoviesByGenre data={resultByGenre   }/>
      </ScrollView>
     </Box>
   </BaseScreen>
  )
}

export default React.memo(Dashboard)