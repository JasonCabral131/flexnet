import React from 'react'
import { useRoute } from '@react-navigation/native'
import BaseScreen from '../../components/BaseScreen'
import { Box, HStack, Text } from 'native-base'
import BackButton from '../../components/BackButton'
import { Colors } from '../../constant/colors'

const Genre = () => {
    const {name}: any = useRoute().params || {}
  return (
    <BaseScreen >
    <Box width={"100%"} px={4} pb={1} >
        <HStack space={1} alignItems={"center"} >
            <BackButton />
            <Text fontSize={"md"} color={Colors.white}>{name}</Text>
        </HStack>
    </Box>
</BaseScreen>
  )
}

export default React.memo(Genre)