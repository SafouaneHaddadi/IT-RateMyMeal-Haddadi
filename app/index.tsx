import Header from "@/components/Header";
import MealCard from "@/components/MealCard";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Application Rate my meal !</Text>
      <Header title="Bienvenue sur l'app Rate my meal" />

      <MealCard 
        name="Pizza Margherita" 
        imageUrl="https://i.imgur.com/Cbe2LfH.jpeg" 
        rating={4.5} 
      />
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
