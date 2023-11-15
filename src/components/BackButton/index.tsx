import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Circle } from 'native-base'
import React from 'react'
import { TouchableOpacity } from 'react-native'
type Props = {
    onBack?: () => {}
}
const BackButton: React.FC<Props> = ({
    onBack
}) => {
    const navigation  = useNavigation()
  return (
    <TouchableOpacity onPress={() => {
        if(onBack) return onBack()
        navigation.goBack()
    }}>
    <Circle p={2} bgColor={'rgba(255, 255, 255, 0.5)'} >
    <AntDesign  name="arrowleft" size={18}/>
    </Circle>
    </TouchableOpacity>
  )
}

export default React.memo(BackButton)