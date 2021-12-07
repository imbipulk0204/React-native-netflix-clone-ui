import React, { useState } from 'react'
import { FlatList, Image, Pressable } from 'react-native';
import { Text, View } from '../../components/Themed';
import styles from './Style';
import movies from '../../assets/data/movies';
import { AntDesign, Entypo, Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
import EpisodeItem from '../../components/EpisodeItem/Index';
import { Picker } from '@react-native-picker/picker';
import VideoPlayer from '../../components/VideoPlayer/Index';


const firstEpiosde=movies.seasons.items[0].episodes.items[0];
const firstSeason=movies.seasons.items[0]

const MovieDetailsScreen=()=> {
    const [currentSeason,setCurrentSeason]=useState(firstSeason)
    const [currentEpisode,setCurrentEpisode]=useState(firstSeason.episodes.items[0])
    const seasonNames=movies.seasons.items.map(season=>season.name)
    return (
        <View>
            <VideoPlayer episode={currentEpisode} />
              {/* <Image style={styles.image} source={{uri: firstEpiosde.poster}} /> */}
           

                <FlatList 
                    style={{marginBottom:240}}
                    data={currentSeason.episodes.items}
                    renderItem={({item})=>(                     
                        <EpisodeItem 
                        episode={item}  
                        onPress={setCurrentEpisode}
                        /> 
                        )}                 
                        ListHeaderComponent={(
                        <View style={{padding:12}}>

                        <Text style={styles.title}>{movies.title}</Text>
                        <View style={{flexDirection:"row"}}>
                                <Text style={styles.match}>98% match</Text>
                                <Text style={styles.year}>{movies.year}</Text>
                        <View style={styles.ageContainer}>
                                <Text style={styles.age}>12+</Text>
                        </View>
                            <Text style={styles.year}>{movies.numberOfSeasons} Seasons</Text>
                            <MaterialIcons name="hd" size={24} color="white" />
                        </View>
                {/* play button */}
                        <Pressable onPress={()=>console.log("play")} style={styles.playButton}>
                            <Text style={styles.playButtonText}>
                                <Entypo name="controller-play" size={16} color="black" />
                                Play
                            </Text>
                        </Pressable>
                {/* download button */}
                        <Pressable onPress={()=>console.log("play")} style={styles.downloadButton}>
                            <Text style={styles.downloadButtonText}>
                                <AntDesign name="download" size={16} color="white" />
                                {' '}
                                Download
                            </Text>
                        </Pressable>
                        <Text style={{marginVertical:10}}>{movies.plot}</Text>
                        <Text style={styles.year}>Cast: {movies.cast}</Text>
                        <Text style={styles.year}>Creator: {movies.creator}</Text>
        
                        {/* row with icon buttons  */}
                        <View style={{flexDirection:"row",marginTop:20}}>
                            <View style={{alignItems:"center",marginHorizontal:20}}>
                                <AntDesign name="plus" size={24} color="white" />
                                <Text style={{color:"darkgrey"}}>My List</Text>
                            </View>
                            <View style={{alignItems:"center",marginHorizontal:20}}>
                                <Feather name="thumbs-up" size={24} color="white" />
                                <Text style={{color:"darkgrey"}}>Rate</Text>
                            </View>
                            <View style={{alignItems:"center",marginHorizontal:20}}>
                                <Ionicons name="share-social" size={24} color="white" />
                                <Text style={{color:"darkgrey"}}>Share</Text>
                            </View>
                        </View>
                        
                        <Picker
                        style={{color:"white",width:140}}
                        dropdownIconColor="white"
                            selectedValue={currentSeason.name}
                            onValueChange={(itemValue, itemIndex) =>{
                                setCurrentSeason(movies.seasons.items[itemIndex])
                            }}>
                             {
                                 seasonNames.map(seasonName=>(
                                     <Picker.Item label={seasonName} value={seasonName} key={seasonName} />
                                 ))
                             }   
                        </Picker>

                    </View>
                    )}
                />

        </View>
    )
}

export default MovieDetailsScreen;


{/* <Picker
  selectedValue={selectedLanguage}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedLanguage(itemValue)
  }>
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" />
</Picker> */}