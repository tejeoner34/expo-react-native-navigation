import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';

function renderMealitem(itemData) {
  const { item: block } = itemData;
  return (
    <View style={styles.blockContainer}>
      <Text style={styles.blockTitle}>{block.title}</Text>
      {block.data.map((item) => (
        <View key={item} style={styles.blockitem}>
          <Text style={styles.blockItemText}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

export default function ItemsList({ items }) {
  return (
    <FlatList
      style={styles.container}
      data={items}
      renderItem={(block) => renderMealitem(block)}
      keyExtractor={(block) => block.title}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  blockContainer: {
    paddingBottom: 10,
    marginBottom: 20,
    gap: 10,
  },
  blockTitle: {
    color: '#DFB49A',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  blockitem: {
    backgroundColor: '#DFB49A',
    textAlign: 'center',
    padding: 5,
    borderRadius: 5,
  },
  blockItemText: {
    textAlign: 'center',
  },
});
