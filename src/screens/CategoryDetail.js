import { StyleSheet, View } from 'react-native';
import { CATEGORIES, MEALS } from '../../data/data';
import { useEffect } from 'react';
import MealItemList from '../components/MealItemList';

export default function CategoryDetail({ route, navigation }) {
  const { categoryId } = route.params;
  const mealsToDisplay = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

  useEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title;
    // We can configure some stack navigation options directly with the setOptions method in the component
    // or from the component in which the stack.screen is declared passing options props
    navigation.setOptions({ title: categoryTitle });
  }, [categoryId]);

  return (
    <View style={styles.container}>
      <MealItemList mealsList={mealsToDisplay} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
