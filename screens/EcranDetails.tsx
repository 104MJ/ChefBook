import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

export default function EcranDetails({ route }: Props) {
  const { recette } = route.params;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Image source={{ uri: recette.image }} style={styles.image} />
        
        <View style={styles.content}>
          <Text style={styles.title}>{recette.title}</Text>
          
          <View style={styles.infoRow}>
            <View style={styles.infoBadge}>
              <Text style={styles.infoText}>⏱ {recette.temps_preparation}</Text>
            </View>
            <View style={styles.infoBadge}>
              <Text style={styles.infoText}>📊 {recette.difficulte}</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Ingrédients</Text>
            <View style={styles.card}>
              {recette.ingredients.map((item, index) => (
                <Text key={index} style={styles.ingredientItem}>
                   🍴 {item}
                </Text>
              ))}
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Étapes de préparation</Text>
            {recette.etapes.map((etape, index) => (
              <View key={index} style={styles.etapeContainer}>
                <View style={styles.etapeNumber}>
                  <Text style={styles.etapeNumberText}>{index + 1}</Text>
                </View>
                <Text style={styles.etapeText}>{etape}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 250,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 25,
  },
  infoBadge: {
    backgroundColor: '#f1f2f6',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#dfe4ea',
  },
  infoText: {
    color: '#2f3542',
    fontWeight: '600',
  },
  section: {
    marginTop: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
    paddingBottom: 5,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    borderWidth: 1,
    borderColor: '#f1f2f6',
    // Ombre légère
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  ingredientItem: {
    fontSize: 16,
    color: '#57606f',
    marginBottom: 10,
    lineHeight: 22,
  },
  etapeContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'flex-start',
  },
  etapeNumber: {
    backgroundColor: '#3498db',
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    marginTop: 2,
  },
  etapeNumberText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  etapeText: {
    flex: 1,
    fontSize: 16,
    color: '#2f3542',
    lineHeight: 24,
  },
});
