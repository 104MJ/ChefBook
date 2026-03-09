import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Recette } from "../types/recette";

type RecetteCardProps = {
  recette: Recette;
  onPress?: () => void;
};

const RecetteCard: React.FC<RecetteCardProps> = ({ recette, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Image source={{ uri: recette.image }} style={styles.image} resizeMode="cover" />
    <View style={styles.info}>
      <Text style={styles.title}>{recette.title}</Text>
      <View style={styles.row}>
        <Text style={styles.details}>⏱ {recette.temps_preparation}</Text>
        <Text style={[styles.details, styles.difficulty]}> • {recette.difficulte}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    marginHorizontal: 16,
    marginVertical: 10,
    overflow: "hidden",
    // Ombre Android
    elevation: 4,
    // Ombre iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  image: {
    width: "100%",
    height: 180,
  },
  info: {
    padding: 15,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#2c3e50",
    marginBottom: 6,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  details: {
    fontSize: 14,
    color: "#7f8c8d",
  },
  difficulty: {
    color: "#e67e20",
    fontWeight: "600",
  },
});

export default RecetteCard;