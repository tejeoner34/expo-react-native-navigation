import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { MEALS } from '../../data/data';
import MealItem from '../components/MealItem';

function renderMealitem(itemData) {
  const { item: meal } = itemData;
  const mealItemProps = {
    affordability: meal.affordability,
    complexity: meal.complexity,
    title: meal.title,
    duration: meal.duration,
    imageUrl: meal.imageUrl,
  };
  return (
    <View style={styles.itemContainer}>
      <MealItem {...mealItemProps} />
    </View>
  );
}

export default function MealDetail({ route }) {
  const { categoryId } = route.params;
  const mealsToDisplay = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

  return (
    <View style={styles.container}>
      <FlatList
        data={mealsToDisplay}
        renderItem={renderMealitem}
        keyExtractor={(meal) => meal.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  itemContainer: {
    padding: 10,
  },
});
