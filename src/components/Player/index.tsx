import React, { useEffect,  } from 'react'
import {Audio, Video} from "expo-av"
import BaseScreen from '../BaseScreen'
import { Colors } from '../../constant/colors'
import { Box } from 'native-base'

import BackButton from '../BackButton'

type Props ={
    uri: string
}
const Player: React.FC<Props> = ({uri}) => {
    useEffect(() => {
        const enableAudio = async () => {
            try {
            
                await Audio.setAudioModeAsync({ playsInSilentModeIOS: true })
            
            } catch (e) {
              console.log(e)
            }
          }
          enableAudio()
    },[])

  return (
    <BaseScreen fullScreen  backgroundColor={Colors.black}>

        <Box mt={8} position={"absolute"} width={"100%"} py={3} px={4} zIndex={1000000} justifyContent={"flex-start"} alignItems={"flex-start"}>
           <BackButton />
        </Box>
       <Video 
            source={{uri}}
            useNativeControls
            resizeMode={"stretch" as any}
            isLooping
            rate={1.0}
            volume={5}
            style={
                {
                    height: "100%",
                    width: "100%",
                    alignSelf: "stretch",
                }
            }
            shouldPlay={true}
            isMuted={false}
            //@ts-ignore
            playsInSilentLockedModeIOS
            ignoreSilentSwitcher
           
           
            />
        
      
    </BaseScreen>
  )
}

export default React.memo(Player)