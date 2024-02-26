import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { MEALS } from '../../data/data';
import MealItem from '../components/MealItem';

export default function MealDetail({ route }) {
  const { categoryId } = route.params;
  const mealsToDisplay = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {mealsToDisplay.map((meal) => (
        <View style={styles.itemContainer} key={meal.id}>
          <MealItem
            affordability={meal.affordability}
            complexity={meal.complexity}
            title={meal.title}
            duration={meal.duration}
            imageUrl={meal.imageUrl}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    width: '90%',
    paddingBottom: 24,
  },
});
