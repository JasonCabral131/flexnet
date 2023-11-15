import React from 'react'
import BaseScreen from '../../components/BaseScreen'
import { Box, HStack, Text } from 'native-base'
import BackButton from '../../components/BackButton'
import { Colors } from '../../constant/colors'

const Search = () => {
  return (
    <BaseScreen >
        <Box width={"100%"} px={4} pb={1} >
            <HStack space={1} alignItems={"center"} >
                <BackButton />
                <Text fontSize={"md"} color={Colors.white}>Search</Text>
            </HStack>
        </Box>
    </BaseScreen>
  )
}

export default React.memo(Search)