import { View, Text } from 'react-native'
import React from 'react'
import { MovieType } from '../../redux/feature/movieSlice'
type Props ={
    data: MovieType
}
const MovieCardInfo: React.FC<Props> = ({
    data
}) => {
  return (
    <View>
      <Text>MovieCardInfo</Text>
    </View>
  )
}

export default React.memo(MovieCardInfo)