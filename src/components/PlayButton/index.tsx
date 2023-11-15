import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Circle } from 'native-base'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import Player from '../Player'
import { hitslop } from '../../utils/common'
type Props = {
    url: string,
    size: number
}
const PlayButton: React.FC<Props> = ({url, size}) => {
    const navigation = useNavigation()
    const handlePlay = () => {
        navigation.navigate("TransparentModal", {
            content: <Player uri={url} />
        })
    }
  return (
    <TouchableOpacity onPress={handlePlay} hitSlop={hitslop}>
        <Circle p={5} bgColor={'#ccbb04'}>
            <AntDesign size={size} name="caretright" />
        </Circle>
    </TouchableOpacity>
  )
}

export default React.memo(PlayButton)