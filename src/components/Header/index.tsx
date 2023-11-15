import React from 'react'
import { Box, HStack, Text } from 'native-base'
import BackButton from '../BackButton'
import { Colors } from '../../constant/colors'
type Props = {
    onBack?: () => {},
    title?: string 
    customNext?: any
}
const Header: React.FC<Props> = ({
    onBack, title, customNext
}) => {
  return (
    <Box width={"100%"} px={4} pb={1} >
    <HStack space={1} alignItems={"center"} >
        <BackButton onBack={onBack}/>
        {
          customNext ? customNext :  <Text fontSize={"md"} color={Colors.white}>{title}</Text>
        }
       
    </HStack>
</Box>
  )
}

export default React.memo(Header)