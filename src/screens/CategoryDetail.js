import { FlatList, StyleSheet, View } from 'react-native';
import { CATEGORIES, MEALS } from '../../data/data';
import MealItem from '../components/MealItem';
import { useEffect } from 'react';

function renderMealitem(itemData, navigation) {
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
      <MealItem
        {...mealItemProps}
        onPress={() =>
          navigation.navigate('MealDetail', {
            meal,
          })
        }
      />
    </View>
  );
}

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
      <FlatList
        data={mealsToDisplay}
        renderItem={(meal) => renderMealitem(meal, navigation)}
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
