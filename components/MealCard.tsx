import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

type MealCardProps = {
  name: string;
  imageUrl: string;
  rating: number;
  onDelete: () => void;
}

const MealCard = ({ name, imageUrl, rating, onDelete }: MealCardProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>Name:</Text>
      <Text style={styles.value}>{name}</Text>

      <Text style={styles.label}>Image:</Text>
      <Image source={{ uri: imageUrl }} style={styles.image} />

      <Text style={styles.label}>Rating:</Text>
      <Text style={styles.value}>{rating}/5</Text>

       <Pressable onPress={onDelete} style={styles.deleteButton}>
        <Text style={styles.deleteText}>X</Text>
      </Pressable>
      
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

deleteText: {
  color: "red"
},
deleteButton:{
  marginTop: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,

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