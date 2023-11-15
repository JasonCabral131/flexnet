import React from 'react'
import { MovieType } from '../../../../redux/feature/movieSlice'
import {  Box, HStack, Image, Text, VStack, View } from 'native-base'
import FavoriteButton from '../../../../components/FavoriteButton'
import { LinearGradient } from 'expo-linear-gradient'
import { Colors } from '../../../../constant/colors'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import moment from 'moment'
type Props ={
    data: MovieType
    showFavorite?: boolean
}
const MovieCardInfo: React.FC<Props> = ({
    data,
    showFavorite = true
}) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={  () => {
        navigation.navigate("MovieDetail", {
            data,
        })
    }}>
   <VStack position={"relative"}>

      <Image 
      source={{uri: data?.artworkUrl100}}
      height={"280px"}
      width={"220px"}
      resizeMode="cover"
      />
      {
        showFavorite ?    <Box position="absolute" top={2} right={2}>
        <FavoriteButton trackId={data?.trackId} isCheck={true} size={20}/>

      </Box> : null
      }
   
      <View position={"absolute"} bottom={0} width={"100%"}  zIndex={1001}>
            <LinearGradient
                colors={['rgba(0, 0, 0, 0)', Colors.black]} 
                start={{ x: 0, y: 0}}
                end={{ x: 0, y: 1 }} 
                style={{ flex: 1 }}
            >
                <View flex={1}   mt={4} mb={5} pl={2}>
                    <Text style={{ color: 'white', fontSize: 15 }} fontWeight={"extrabold"} mt={5}>{
                        data?.trackName
                    }</Text>
                    <HStack justifyContent={"flex-start"} alignItems={"center"} space={2}>
                        <Box pl={1}>
                        <Text style={{ color: 'white', fontSize: 10 }} fontStyle={"normal"} mt={1} >
                            {'A$'}{data?.trackPrice} · <TouchableOpacity 
                                onPress={() => {
                                    navigation.navigate("Genre", {
                                        name: data?.primaryGenreName
                                    })
                                }}
                            >
                                <Text style={{ color: 'white', fontSize: 10 }} fontFamily={"mono"}>
                                {data?.primaryGenreName}
                            </Text>
                            </TouchableOpacity > ·  {moment(data?.releaseDate).format("YYYY")}
                        </Text>
                        </Box>
                     
                    </HStack>
                </View>
            </LinearGradient>
    </View>
   </VStack>
   </TouchableOpacity>
  )
}

export default React.memo(MovieCardInfo)