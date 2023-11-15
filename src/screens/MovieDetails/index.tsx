import React from 'react'
import BaseScreen from '../../components/BaseScreen'
import Header from '../../components/Header'
import { useRoute } from '@react-navigation/native'
import { MovieType } from '../../redux/feature/movieSlice'
import Top10MovieCard from '../Dashboard/Top10Movies/Top10MovieCard'
import { Box, ScrollView, Text, VStack } from 'native-base'
import { useWindowDimensions } from 'react-native'
import { Colors } from '../../constant/colors'


const MovieDetails = () => {
    const {data}: any = useRoute().params 
    const track = data as MovieType
    const {height} = useWindowDimensions()
    console.log(data)
  return (
    <BaseScreen fullScreen>
        <Box flex={1}>
        <VStack position={"absolute"} top={10}  alignItems={"flex-end"}  zIndex={10000000} width={"100%"}>
          <Header />
        </VStack>
       <ScrollView  flex={1}>
        <Box height={height * .65}>
         <Top10MovieCard data={track}/>
        </Box>
        
        <Box px={4} mt={2} mb={4}>
        <Text 
        fontSize={"lg"}
        color={Colors.lightergrey}
        fontWeight={"bold"}
        >
            STORYLINE
        </Text>
        <Text 
        fontSize={"sm"}
        color={Colors.white}
        fontWeight={"bold"}
        >
            {track?.longDescription}
        </Text>
        </Box>
        </ScrollView>
        </Box>
    </BaseScreen>
  )
}

export default MovieDetails