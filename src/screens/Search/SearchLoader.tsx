import { Box, HStack } from 'native-base'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import {createShimmerPlaceholder} from "react-native-shimmer-placeholder"

const Shimmer = createShimmerPlaceholder(LinearGradient)
const SearchLoader = () => {
  return (
    <HStack space={1} justifyContent={"flex-start"}  mt={2} width={"100%"}>
     <Box >
        <Shimmer 
        style={{
            width:80,
            height: 80
        }}
        />
     </Box>
     <Box mt={2}>
        <Shimmer 
        style={{
            width: "80%",
            height: 10
        }}
        />
         <Shimmer 
        style={{
            width: "40%",
            height: 8,
            marginTop: 10
        }}
        />
     </Box>
    </HStack>
  )
}

export default SearchLoader