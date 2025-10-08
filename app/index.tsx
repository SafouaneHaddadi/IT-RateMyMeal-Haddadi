import AddMealForm from "@/components/AddMealForm";
import Header from "@/components/Header";
import MealCard from "@/components/MealCard";
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Index() {

  type Meal = {
  name: string;
  rating: number;
  imageUrl: string;
};

const [meals, setMeals] = useState<Meal[]>([]);

  const handleAddMeal = (newMeal: Meal) => {
  setMeals([...meals, newMeal]);
};

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Application Rate my meal !</Text>
      <Header title="Bienvenue sur l'app Rate my meal" />

      <AddMealForm onAddMeal={handleAddMeal} />

      <ScrollView>
  {meals.map((meal, index) => (
    <View key={index}>
      <MealCard
        name={meal.name}
        rating={meal.rating}
        imageUrl={meal.imageUrl}
      />
    </View>
  ))}
</ScrollView>

{/* <MealCard 
        name="Pizza Margherita" 
        imageUrl="https://i.imgur.com/Cbe2LfH.jpeg" 
        rating={4.5} 
      /> */}
    
    </View>

     

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center", 
  },
  title: {
    color: 'green',
    fontSize: 18,
    marginBottom: 10,
  },
});
