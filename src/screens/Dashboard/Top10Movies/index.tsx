import React, { useState } from 'react'
import { MovieType } from '../../../redux/feature/movieSlice'
import PagerView from 'react-native-pager-view'
import {Dimensions, StyleSheet} from "react-native"
import Top10MovieCard from './Top10MovieCard'
import { Circle, HStack } from 'native-base'
import { Colors } from '../../../constant/colors'
const height = Dimensions.get("window").height
type Props = {
    data: Array<MovieType>
}
const Top10Movies: React.FC<Props>  = ({
    data = []
}) => {
   const [selected, setSelected] = useState(0)
  return (
    <>
    <PagerView style={styles.container} initialPage={selected} onPageScroll={(e) => setSelected(e?.nativeEvent?.position) }>
        {
         data?.map((item ) => {
            return <Top10MovieCard key={item?.trackId} data={item}/>
         })
        }
       
    </PagerView>
    <HStack justifyContent={"center"} alignItems={"center"}>
    {
         data?.map((_item, index ) => {
            return <Circle p={1} bgColor={index === selected ?  Colors.white : Colors.lightergrey} mr={1}/>
         })
        }
    </HStack>
   </>
  )
}

export default React.memo(Top10Movies)

const styles = StyleSheet.create({
    container: {
        height: height * .55,
        width: "100%"
    }
})