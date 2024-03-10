import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import { FavoritesContext } from '../store/favoritesContext';

export default function FavoritesScreen() {
  const { favorites } = useContext(FavoritesContext);
  console.log(favorites);
  return (
    <View>
      <Text>FavoritesScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
