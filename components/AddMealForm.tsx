import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';


type Meal = {
  name: string;
  rating: number;
  imageUrl: string;
};

type AddMealFormProps = {
  onAddMeal: (meal: Meal) => void;
};


//const AddMealForm = ({ onAddMeal }) => { //on destructure mais on precise pas son type, donc on doit faire du typage
const AddMealForm = ({ onAddMeal }: AddMealFormProps) => {
  const[mealName, setMealName] = useState(''); //champ controlé
  const [rating, setRating] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSave = () => { 
    //console.log("Ajouter une tache")
    //console.log(text) // pour tester si on récupère bien le texte

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

  return(
    <View>
        <Text>Nom du plat</Text>
        <TextInput
          placeholder='Entrez le nom'
          value={mealName}
          onChangeText={setMealName}
       />

       <Text>Image</Text>
        <TextInput
          placeholder='Lien'
          value={imageUrl}
          onChangeText={setImageUrl}
       />

       <Text>Avis</Text>
        <TextInput
          placeholder='Donnez une note'
          value={rating}
          onChangeText={setRating}
          keyboardType='numeric'
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
  },
  input: {
    borderColor: '#888',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  button: {
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
