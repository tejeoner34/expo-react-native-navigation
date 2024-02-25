import { Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function FoodCard({ color, text, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.7,
    shadowOffset: {
      height: 10,
      width: 0,
    },
    shadowRadius: 2,
  },
});
