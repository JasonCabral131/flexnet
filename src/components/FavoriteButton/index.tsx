import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import {AntDesign} from "@expo/vector-icons"
import { Colors } from '../../constant/colors'
import { hitslop } from '../../utils/common'
import { MovieType } from '../../redux/feature/movieSlice'
import { useDispatch, useSelector } from 'react-redux'
import { currentFavorite, setFavorite } from '../../redux/feature/favoriteSlice'
type Props = {
    size:  number,
    data: MovieType
  
}
const FavoriteButton: React.FC<Props> = ({
    size = 10,
    data,
  
}) => {
  const dispatch = useDispatch()
  const favoritesMovie = useSelector(currentFavorite)
  const favorites = favoritesMovie?.favorite
  const isAdded =  favorites.some((favorite) =>
  favorite.items.some((item) => item?.trackId === data?.trackId)
);
  return (
    <TouchableOpacity hitSlop={hitslop} onPress={() => {
      dispatch(setFavorite({movie:data}))
    }}>
    <AntDesign name={isAdded ? "heart" : "hearto"} size={size} color={isAdded ? Colors.yellowDark : Colors.white} />
   </TouchableOpacity>
  )
}

export default React.memo(FavoriteButton)