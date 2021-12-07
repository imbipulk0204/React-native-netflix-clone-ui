import { Video } from 'expo-av';
import { Playback } from 'expo-av/build/AV';
import React, { useEffect, useRef,useState } from 'react'
import { View, Text } from 'react-native'
import { Episode } from '../../types'
import styles from './Styles'
interface VideoPlayerProps{
    episode:Episode;
   
}


const VideoPlayer = (props:VideoPlayerProps) => {
    const {episode}=props;
    const [status, setStatus] = useState({});
    const video = useRef<Playback>(null);

    useEffect(()=>{
        if(!video){
            return;
        }

        (async () =>{
            await video?.current?.unloadAsync();
            await video?.current?.loadAsync(
                {uri:episode.video},
                {},
                false
            );

        })();
    },[episode])
    return (
        <View>
                <Video
                    ref={video}
                    style={styles.video}
                    source={{
                    uri: episode.video,
                    }}
                    posterSource={{
                        uri: episode.poster
                    }}
                    posterStyle={{
                        resizeMode:"cover"
                    }}
                    usePoster={true}
                    useNativeControls
                    resizeMode="contain"
                    isLooping
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                />
        </View>
    )
}

export default VideoPlayer
