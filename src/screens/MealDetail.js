import { StyleSheet, Text, View } from 'react-native';
import { MEALS } from '../../data/data';

export default function MealDetail({ route }) {
  const { categoryId } = route.params;
  const mealsToDisplay = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));
  return (
    <View>
      {mealsToDisplay.map((meal) => (
        <Text>{meal.title}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});
