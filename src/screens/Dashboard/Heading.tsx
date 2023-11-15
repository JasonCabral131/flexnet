import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Box, Circle, VStack } from 'native-base'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const Heading = () => {
    const navigation = useNavigation()
  return (
    <VStack position={"absolute"} top={10}  alignItems={"flex-end"} px={4} zIndex={10000000} width={"100%"}>
        <Box>
        <TouchableOpacity onPress={() => {
          navigation.navigate("Search")
        }}>
            <Circle p={2} bgColor={'rgba(255, 255, 255, 0.5)'} >
                 <AntDesign name="search1" size={25}/>
             </Circle>
        </TouchableOpacity>
        </Box>
     
    </VStack>
  )
}

export default React.memo(Heading)