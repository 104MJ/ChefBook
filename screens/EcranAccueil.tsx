import React, { useState, useMemo } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, SafeAreaView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import RecetteCard from '../components/RecetteCard';
import { Recette } from '../types/recette';
import { RootStackParamList } from '../types/navigation';
import RECETTES from '../data/recette';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Accueil'>;

interface Props {
  navigation: NavigationProp;
}

export default function EcranAccueil({ navigation }: Props) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRecipes = useMemo(() => {
    return RECETTES.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const handlePressRecette = (recette: Recette) => {
    navigation.navigate('Details', { recette });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TextInput 
          style={styles.searchBar}
          placeholder="Rechercher une recette..."
          placeholderTextColor="#95a5a6"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />

        <FlatList
          data={filteredRecipes}
          keyExtractor={(item: Recette) => item.id.toString()}
          renderItem={({ item }: { item: Recette }) => (
            <RecetteCard recette={item} onPress={() => handlePressRecette(item)} />
          )}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>Aucune recette trouvée 😕</Text>
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  container: {
    flex: 1,
  },
  searchBar: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginVertical: 15,
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#dcdde1',
    fontSize: 16,
  },
  listContent: {
    paddingBottom: 20,
  },
  emptyContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  emptyText: {
    fontSize: 18,
    color: '#95a5a6',
  },
});
