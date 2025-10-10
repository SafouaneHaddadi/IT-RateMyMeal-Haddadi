import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';


//type personnalisé pr un objet
type Meal = {
  name: string;
  rating: number;
  imageUrl: string;
};

//ce que doit recevoir le component
type AddMealFormProps = {
  onAddMeal: (meal: Meal) => void; // fct qui prend un param meal de type Meal et retourne rien
};


//const AddMealForm = ({ onAddMeal }) => { //on destructure mais on precise pas son type, donc on doit faire du typage
const AddMealForm = ({ onAddMeal }: AddMealFormProps) => {
  const[mealName, setMealName] = useState(''); //champ controlé (mealName = val actuelle)
  const [rating, setRating] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSave = () => { 

    if(!mealName.trim() || !rating.trim() || !imageUrl.trim()) {
        return;
    }

    onAddMeal({ //si tt est bon
        name: mealName,
        rating: parseFloat(rating),
        imageUrl:imageUrl
    });

    //on vide les champs apres l'ajout
    setMealName('');
    setRating('');
    setImageUrl('');
  };


  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nom du plat</Text>
      <TextInput
        style={styles.input}
        placeholder="Entrez le nom"
        value={mealName}
        onChangeText={setMealName}
      />

      <Text style={styles.label}>Image</Text>
      <TextInput
        style={styles.input}
        placeholder="Lien"
        value={imageUrl}
        onChangeText={setImageUrl}
      />

      <Text style={styles.label}>Avis</Text>
      <TextInput
        style={styles.input}
        placeholder="Donnez une note"
        value={rating}
        onChangeText={setRating}
        keyboardType="numeric"
      />

      <Pressable style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Ajouter le plat</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 40,
    borderRadius: 8,
    elevation: 3,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },

  label:{
    marginBottom: 4,
    fontSize: 16,
    color: 'grey'
  },

  input: {
    borderColor: '#888',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    
  }
  
});

export default AddMealForm;
