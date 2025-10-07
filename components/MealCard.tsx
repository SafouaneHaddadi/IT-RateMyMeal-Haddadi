import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

interface MealCardProps {
  name: string;
  imageUrl: string;
  rating: number;
}

const MealCard = ({ name, imageUrl, rating }: MealCardProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>Name:</Text>
      <Text style={styles.value}>{name}</Text>

      <Text style={styles.label}>Image:</Text>
      <Image source={{ uri: imageUrl }} style={styles.image} />

      <Text style={styles.label}>Rating:</Text>
      <Text style={styles.value}>{rating}/5</Text>
    </View>

  );
};

const styles = StyleSheet.create({
card: {
  backgroundColor: "white",
  borderRadius: 10,
  padding: 15,
  marginTop: 20,
  alignItems: 'center',
  width: 300,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2},
  shadowOpacity: 0.2,
  shadowRadius: 3,
  elevation: 6,
},

label:{
  fontWeight: 'bold',
  fontSize: 15,
  marginTop: 5,

},

value:{
  fontSize: 15,
  marginBottom: 5,
},

image:{
  width: 200,
  height: 120,
  borderRadius: 5,
  marginTop: 5,

}
});

export default MealCard;