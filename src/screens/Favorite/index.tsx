import React from 'react'
import BaseScreen from '../../components/BaseScreen'
import Header from '../../components/Header'
import { Box, ScrollView } from 'native-base'
import { useSelector } from 'react-redux'
import { currentFavorite } from '../../redux/feature/favoriteSlice'
import MoviesByGenre from '../Dashboard/MoviesByGenre'

const Favorite = () => {
  const favoritesMovie = useSelector(currentFavorite)
  const favorites = favoritesMovie?.favorite 
  return (
    <BaseScreen >
        <Header title='Favorites'/>
        <Box flex={1} >
        <ScrollView flex={1} showsVerticalScrollIndicator={false}>
            <MoviesByGenre data={favorites   }/>
        </ScrollView>
        </Box>
    </BaseScreen>
  )
}

export default React.memo(Favorite)