import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useLayoutEffect } from 'react';
import ItemsList from '../components/ItemsList';
import IconButton from '../components/IconButton';

export default function MealDetail({ navigation, route }) {
  const { duration, complexity, affordability, ingredients, steps, imageUrl, title } =
    route.params.meal;

  const mealData = [
    { title: 'Ingredients', data: ingredients },
    { title: 'Steps', data: steps },
  ];

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <IconButton />,
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imgContainer}>
        <Image style={{ width: '100%', height: '100%' }} source={{ uri: imageUrl }} />
      </View>
      <View style={styles.infoCotainer}>
        <Text style={styles.title}>{title}m</Text>
        <View style={styles.detailContainer}>
          <Text style={styles.detail}>{duration}m</Text>
          <Text style={styles.detail}>{complexity.toUpperCase()}</Text>
          <Text style={styles.detail}>{affordability.toUpperCase()}</Text>
        </View>
        <ItemsList items={mealData} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgContainer: {
    maxHeight: '40%',
  },
  infoCotainer: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    color: '#DFB49A',
    textAlign: 'center',
    paddingBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#DFB49A',
    textAlign: 'center',
    paddingBottom: 10,
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  detail: {
    color: '#DFB49A',
    textAlign: 'center',
  },
});
