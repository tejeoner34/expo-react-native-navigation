import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useContext, useLayoutEffect } from 'react';
import ItemsList from '../components/ItemsList';
import IconButton from '../components/IconButton';
import { FavoritesContext } from '../store/favoritesContext';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/redux/favoritesReducer';

export default function MealDetail({ navigation, route }) {
  //   const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  const { duration, complexity, affordability, ingredients, steps, imageUrl, title, id } =
    route.params.meal;
  const isFavorite = !!favorites.find((meal) => meal.id === id);

  const mealData = [
    { title: 'Ingredients', data: ingredients },
    { title: 'Steps', data: steps },
  ];

  function handleFavoriteToggle() {
    const handler = isFavorite ? removeFavorite : addFavorite;
    dispatch(handler(route.params.meal));
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <IconButton isFavorite={isFavorite} onPress={handleFavoriteToggle} />,
    });
  }, [isFavorite]);

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
