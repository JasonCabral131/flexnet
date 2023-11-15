import React from 'react'
import { GenreMovieType } from '.'
import { HStack, Text, VStack } from 'native-base'
import { Colors } from '../../../constant/colors'
type Props ={
    data: GenreMovieType
}
const MoviesCardGenreInfo: React.FC<Props> = ({
    data
}) => {
  return (
    <VStack  py={3}>
        <HStack justifyContent={"space-between"} px={2} alignItems={"center"}>
        <Text 
        fontSize={"md"}
        color={Colors.lightergrey}
        >
            {data?.genre}
        </Text>
        </HStack>
       
    </VStack>
  )
}

export default React.memo(MoviesCardGenreInfo)