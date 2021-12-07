import * as React from 'react';
import { FlatList, Image, Pressable } from 'react-native';
import { Text, View } from '../Themed';
import { useNavigation } from '@react-navigation/core';
import styles from './Styles';


interface HomeCategoryProps {
  category:{
    id:string,
    title:string,
    movies:{
        id:string,
        image:string,
    }[]
}
}

const HomeCategory=(props:HomeCategoryProps)=> {
   const {category}=props;

   const navigation=useNavigation();

   const onMoviePress=(movie)=>{
     navigation.navigate("MoviesDetails", {id:movie.id})
   }
  return (
    <>
      <Text style={styles.title}>{category.title}</Text>
        <FlatList
         data={category.movies}
        renderItem={({item})=>(
          <Pressable onPress={()=>onMoviePress(item)}>
            <Image style={styles.image} source={{uri: item.image}} />
          </Pressable>

        )}
        horizontal
        />
    </>
  );
}

export default HomeCategory;

