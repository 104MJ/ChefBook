import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Recette } from "../types/recette";

type RecetteCardProps = {
  recette: Recette;
  onPress?: () => void;
};

const RecetteCard: React.FC<RecetteCardProps> = ({ recette, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Image source={{ uri: recette.image }} style={styles.image} />
    <View style={styles.info}>
      <Text style={styles.title}>{recette.title}</Text>
      <Text>Préparation : {recette.temps_preparation}</Text>
      <Text>Difficulté : {recette.difficulte}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 10,
    overflow: "hidden",
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 150,
  },
  info: {
    padding: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
});

export default RecetteCard;