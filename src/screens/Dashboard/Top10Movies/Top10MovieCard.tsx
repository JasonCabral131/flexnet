import React from 'react'
import { MovieType } from '../../../redux/feature/movieSlice'
import { Text, VStack, Image, View, Box, HStack } from 'native-base'
import { LinearGradient } from 'expo-linear-gradient';
import moment from 'moment';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../../constant/colors';
import PlayButton from '../../../components/PlayButton';
import FavoriteButton from '../../../components/FavoriteButton';
import { hitslop } from '../../../utils/common';

type Props ={
    data: MovieType
}
const Top10MovieCard: React.FC<Props> = ({
    data
}) => {
    const navigation = useNavigation()
  return (
    <VStack height={"100%"} position={"relative"}>
        <Image 
            source={{uri:data?.artworkUrl100 }}
            height={"100%"}
            width={"100%"}
            resizeMode="cover"
            alt={data?.trackName}
        />
        <Box position="absolute" left={0} flex={1} right={0} bottom={0} top={0} justifyContent="center"
                alignItems="center" zIndex={1000} >
            <PlayButton url={data?.previewUrl} size={40}/>
        </Box>
         <View position={"absolute"} bottom={0} width={"100%"}  zIndex={1001}>
            <LinearGradient
                colors={['rgba(0, 0, 0, 0)', Colors.black]} 
                start={{ x: 0, y: 0}}
                end={{ x: 0, y: 1 }} 
                style={{ flex: 1 }}
            >
                <View flex={1}   mt={4} mb={5} pl={2}>
                    <TouchableOpacity onPress={() => {
                     
                         navigation.navigate("MovieDetail", {
                            data,
                        })
                    }}>
                        <Text style={{ color: 'white', fontSize: 22 }} fontWeight={"extrabold"} mt={5}>{
                            data?.trackName
                        }</Text>
                    </TouchableOpacity>
                    <HStack justifyContent={"flex-start"} alignItems={"center"} space={2}>
                        <Box pl={1}>
                        <Text style={{ color: 'white', fontSize: 15 }} fontStyle={"normal"} mt={1} >
                            {'A$'}{data?.trackPrice} · <TouchableOpacity 
                                onPress={() => {
                                    navigation.navigate("Search", {
                                        value: data?.primaryGenreName
                                    })
                                }}
                                hitSlop={hitslop}
                            >
                                <Text style={{ color: 'white', fontSize: 15 }} fontStyle={"normal"}>
                                {data?.primaryGenreName}
                            </Text>
                            </TouchableOpacity > ·  {moment(data?.releaseDate).format("YYYY")}
                        </Text>
                        </Box>
                        <Box mt={"4px"}>
                        <FavoriteButton data={data}  size={20} />
                        </Box>
                    </HStack>
                </View>
            </LinearGradient>
    </View>
    </VStack>
  )
}

export default React.memo(Top10MovieCard)