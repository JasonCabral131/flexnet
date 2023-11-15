import { View, Text } from 'react-native'
import React from 'react'
import BaseScreen from '../../components/BaseScreen'
import { useRoute } from '@react-navigation/native'

const TransparentModal = () => {
    const {content}: any = useRoute().params 
  return (
   <BaseScreen fullScreen backgroundColor='transparent'>
    {content}
   </BaseScreen>
  )
}

export default React.memo(TransparentModal)