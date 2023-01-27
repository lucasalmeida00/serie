import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import styles from './style';
import series from '../../config/series';
import SerieCard from '../../components/SerieCard';

const SerieScreen = props => {
  return (
    <View>
      <FlatList
        data={series}
        renderItem={({item}) => (
          <SerieCard
            serie={item}
            onNavigate={serie =>
              props.navigation.navigate('SerieDetail', {serie: item})
            }
          />
        )}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default SerieScreen;
