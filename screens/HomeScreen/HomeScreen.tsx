import * as React from 'react';
import { FlatList, Image } from 'react-native';
import HomeCategory from '../../components/HomeCategory/Index';
import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import styles from './Styles';

import CategoryData from '../../assets/data/Category';


export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
      <FlatList
       data={CategoryData.items}
       renderItem={({item})=><HomeCategory category={item} /> }
      />
    </View>
  );
}

