import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {AntDesign} from "@expo/vector-icons"
import { Colors } from '../../constant/colors'
type Props = {
    size:  number,
    trackId:  string | number,
    isCheck: boolean
}
const FavoriteButton: React.FC<Props> = ({
    size = 10,
    trackId,
    isCheck
}) => {
  return (
    <TouchableOpacity>
    <AntDesign name={isCheck ? "heart" : "hearto"} size={size} color={isCheck ? Colors.yellowDark : Colors.white} />
   </TouchableOpacity>
  )
}

export default React.memo(FavoriteButton)