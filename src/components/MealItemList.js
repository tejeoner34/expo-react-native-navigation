import { FlatList, StyleSheet, View } from 'react-native';
import MealItem from './MealItem';
import { useNavigation } from '@react-navigation/native';

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

export default function MealItemList({ mealsList }) {
  const navigation = useNavigation();
  return (
    <View>
      <FlatList
        data={mealsList}
        renderItem={(meal) => renderMealitem(meal, navigation)}
        keyExtractor={(meal) => meal.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
  },
});
