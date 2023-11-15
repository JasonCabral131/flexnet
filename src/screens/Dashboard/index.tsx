import React, { useEffect } from 'react'
import BaseScreen from '../../components/BaseScreen'
import { useGetAllMovieQuery } from '../../redux/services/movieApi'
import { currentMovies } from '../../redux/feature/movieSlice'

const Dashboard = () => {
  const {data, isLoading, error} = useGetAllMovieQuery({})

  return (
   <BaseScreen fullScreen>
     
   </BaseScreen>
  )
}

export default React.memo(Dashboard)