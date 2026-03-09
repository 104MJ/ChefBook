import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import RecetteCard from './components/RecetteCard';
import { Recette } from './types/recette';
import recette from './data/recette';

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={recette}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <RecetteCard recette={item} />}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
