import { View, Text } from 'react-native'
import React, { useCallback, useMemo } from 'react'
import { MovieType } from '../../../redux/feature/movieSlice'
import { FlatList, VStack } from 'native-base'
import MoviesCardGenreInfo from './MoviesCardGenreInfo'
export type GenreMovieType = {
    genre: string,
    items: Array<MovieType>
}
type Props = {
    data: Array<GenreMovieType>
}
const  MoviesByGenre: React.FC<Props>= ({
  data
}) => {
  const render = useCallback(({item}: any) => {
    return <MoviesCardGenreInfo data={item}/>
  }, [data])
  const memozed = useMemo(() => render , [])
  return (
    <VStack flex={1} mt={2}>
      <FlatList 
        data={data}
        renderItem={memozed as any}
        showsVerticalScrollIndicator={false}
        numColumns={1}
        removeClippedSubviews
      />
    </VStack>
  )
}

export default React.memo(MoviesByGenre)