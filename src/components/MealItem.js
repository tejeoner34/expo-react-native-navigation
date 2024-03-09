import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

export default function MealItem({
  title,
  affordability,
  complexity,
  duration,
  imageUrl,
  onPress,
}) {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image style={{ width: '100%', height: '100%' }} source={{ uri: imageUrl }} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.detailContainer}>
          <Text style={styles.detail}>{duration}m</Text>
          <Text style={styles.detail}>{complexity.toUpperCase()}</Text>
          <Text style={styles.detail}>{affordability.toUpperCase()}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    height: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 4,
  },
  imageContainer: {
    flex: 1,
  },
  infoContainer: {
    flex: 1 / 3,
    justifyContent: 'center',
    alignContent: 'center',
    gap: 10,
    padding: 10,
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  detail: {
    textAlign: 'center',
  },
});
