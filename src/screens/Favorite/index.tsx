import React from 'react'
import BaseScreen from '../../components/BaseScreen'
import Header from '../../components/Header'

const Favorite = () => {
  return (
    <BaseScreen >
        <Header title='Favorites'/>
    </BaseScreen>
  )
}

export default React.memo(Favorite)