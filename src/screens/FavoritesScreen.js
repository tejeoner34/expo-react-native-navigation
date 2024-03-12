import { StyleSheet, View } from 'react-native';
import { useContext } from 'react';
import { FavoritesContext } from '../store/favoritesContext';
import MealItemList from '../components/MealItemList';
import { useSelector } from 'react-redux';

export default function FavoritesScreen() {
  //   const { favorites } = useContext(FavoritesContext);
  const favorites = useSelector((state) => state.favorites);
  console.log(favorites);
  return (
    <View style={styles.container}>
      <MealItemList mealsList={favorites} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
