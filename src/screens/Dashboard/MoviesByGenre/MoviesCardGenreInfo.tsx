import React, { useCallback, useMemo } from 'react'
import { GenreMovieType } from '.'
import { Box, FlatList, HStack, Text, VStack } from 'native-base'
import { Colors } from '../../../constant/colors'
import MovieCardInfo from './MovieCardInfo'
import { isEmpty } from 'lodash'
type Props ={
    data: GenreMovieType
    showFavorite?: boolean
}
const MoviesCardGenreInfo: React.FC<Props> = ({
    data,
    showFavorite = true
}) => {
  const render = useCallback(({item}: any) => {
    return <MovieCardInfo data={item} showFavorite={showFavorite}/>
  }, [data])
  const memozed = useMemo(() => render , [])
  if(isEmpty(data?.items)){
    return null
  }
  return (
    <VStack  py={3}>
        <HStack justifyContent={"space-between"} px={2} alignItems={"center"}>
        <Text 
        fontSize={"lg"}
        color={Colors.lightergrey}
        fontWeight={"bold"}
        >
            {data?.genre}
        </Text>
   
        </HStack>
        <Box pl={3} mt={2}>
          <FlatList 
            data={data?.items}
            renderItem={memozed as any}
            showsVerticalScrollIndicator={false}
            numColumns={1}
            removeClippedSubviews
            horizontal
            ItemSeparatorComponent={() => <Box mr={2}/>}
          />
       </Box>
    </VStack>
  )
}

export default React.memo(MoviesCardGenreInfo)