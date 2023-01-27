import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './style';

const SerieCard = ({serie, onNavigate}) => {
  return (
    <TouchableOpacity onPress={onNavigate} style={styles.container}>
      <View style={styles.card}>
        <Image source={{uri: serie.img}} aspectRatio={1} resizeMode="cover" />
        <View style={styles.cardTitleWrapper}>
          <Text style={styles.cardTitle}>{serie.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SerieCard;
