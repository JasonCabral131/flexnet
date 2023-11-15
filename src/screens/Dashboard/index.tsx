import React, { useEffect } from 'react'
import BaseScreen from '../../components/BaseScreen'

const Dashboard = () => {
  useEffect(() => {
    // Fetch movie list from iTunes API
    fetch('https://itunes.apple.com/search?term=star&country=au&media=movie&all')
      .then(response => response.json())
      .then(data => {
        // const moviesData = data.results;
        console.log(JSON.stringify(data, null, 3))
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  return (
   <BaseScreen fullScreen>
     
   </BaseScreen>
  )
}

export default React.memo(Dashboard)