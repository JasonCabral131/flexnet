import React, { useCallback, useState } from 'react'
import BaseScreen from '../../components/BaseScreen'

import Header from '../../components/Header'
import { Box, Image, Input, Text } from 'native-base'
import { Colors } from '../../constant/colors'
import { useSearchMovieQuery } from '../../redux/services/movieApi'
import SearchLoader from './SearchLoader'
import { isArray } from 'lodash'
import MoviesByGenre, { GenreMovieType } from '../Dashboard/MoviesByGenre'

const Search = () => {
  const [search, setSearch] = useState("")
  const {data, isLoading, error} = useSearchMovieQuery({search})
  const onChange = useCallback((val: string) => {
    setSearch(val)
  }, [])
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
  return (
    <BaseScreen >
       <Header customNext={<Input 
       width={"100%"}
        placeholder='Search here'
        focusOutlineColor={"transparent"}
        borderWidth={0}
        value={search}
        onChangeText={onChange}
        fontSize={"lg"}
        _focus={{
          borderWidth: 0,
          backgroundColor: "transparent"
        }}
        color={Colors.lightergrey}
       />}/>
       <Box flex={1} px={4}>
       {
        search.length === 0 ? 
        <Box flex={1} justifyContent={"center"} alignItems={"center"}>
          <Image
            source={require("./../../assets/images/searchHere.png")}  
           width={"200"}
           height={"200px"}       
          />  
          <Text fontWeight={"bold"} fontSize={"lg"} color={Colors.lightergrey}>
            Movie Search
          </Text>
          <Text fontWeight={"bold"} fontSize={"sm"} color={Colors.white}>
            Discover and Play Your Favorite Movies
          </Text>
        </Box> :  
        search.length > 0 && isLoading  ?
         [...Array(6)].map((_data, index) => <SearchLoader key={index}/>)  
         : resultByGenre.length > 0 ? <MoviesByGenre data={resultByGenre} showFavorite={false}/> : 
         <Box flex={1} justifyContent={"center"} alignItems={"center"}>
          <Image
            source={require("./../../assets/images/no-result-found.png")}  
           width={"200"}
           height={"200px"}       
          />  
          <Text fontWeight={"bold"} fontSize={"lg"} color={Colors.lightergrey}>
           No Result Found
          </Text>
         
        </Box>
       }
       </Box>
    </BaseScreen>
  )
}

export default React.memo(Search)