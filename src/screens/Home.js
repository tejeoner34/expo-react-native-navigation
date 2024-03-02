import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import FoodCard from '../components/FoodCard';
import { CATEGORIES } from '../../data/data';

export default function Home({ navigation }) {
  function handleChooseCategory(categoryId) {
    navigation.navigate('CategoryDetail', {
      categoryId,
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.homeContainer}>
        {CATEGORIES.map((category) => (
          <FoodCard
            key={category.id}
            color={category.color}
            text={category.title}
            onPress={() => handleChooseCategory(category.id)}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  homeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 25,
    justifyContent: 'center',
    marginBottom: 20,
  },
});
