import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, Image, Text, TouchableOpacity, StyleSheet, Linking, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MedicineSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);

  useEffect(() => {
    loadRecentSearches();
  }, []);

  // Load recent searches from storage
  const loadRecentSearches = async () => {
    try {
      const storedSearches = await AsyncStorage.getItem('recentSearches');
      if (storedSearches) {
        setRecentSearches(JSON.parse(storedSearches));
      }
    } catch (error) {
      console.error('Error loading recent searches:', error);
    }
  };

  // Save recent searches
  const saveRecentSearch = async (searchText) => {
    try {
      let updatedSearches = [searchText, ...recentSearches.filter(item => item !== searchText)];
      if (updatedSearches.length > 5) updatedSearches.pop(); // Keep only last 5 searches
      setRecentSearches(updatedSearches);
      await AsyncStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
    } catch (error) {
      console.error('Error saving search:', error);
    }
  };

  // Search function
  const handleSearch = async (text) => {
    setQuery(text);

    if (text.trim() === '') {
      setResults([]);
      return;
    }

    const apiKey = 'AIzaSyDIQOvANec1t2YBXYdOXM2W1kxhu-Kil_o'; //  API key
    const cx = '910423ee6fb7d4fab'; //  Search Engine ID

    try {
      const response = await fetch(`https://www.googleapis.com/customsearch/v1?q=${text}&cx=${cx}&key=${apiKey}`);
      const data = await response.json();
      const filteredResults = data.items.map(item => ({
        name: item.title,
        image: item.pagemap?.cse_image?.[0]?.src || 'https://via.placeholder.com/100',
        link: item.link
      }));

      setResults(filteredResults);
      saveRecentSearch(text);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search for medicines..."
        value={query}
        onChangeText={handleSearch}
      />

      {/* Show recent searches */}
      {query === '' && recentSearches.length > 0 && (
        <ScrollView style={styles.recentSearchContainer}>
          {recentSearches.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => handleSearch(item)}>
              <Text style={styles.recentSearchItem}>{item}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}

      {/* Show search results */}
      <FlatList
        data={results}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.details}>
              <Text style={styles.medicineName}>{item.name}</Text>
              <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(item.link)}>
                <Text style={styles.buttonText}>View Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  searchBar: {
    height: 50,
    borderColor: '#6200ea',
    borderWidth: 2,
    borderRadius: 25,
    paddingLeft: 15,
    backgroundColor: '#fff',
    marginBottom: 10
  },
  recentSearchContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10
  },
  recentSearchItem: {
    fontSize: 16,
    paddingVertical: 5,
    color: '#6200ea'
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3
  },
  image: { width: 60, height: 60, borderRadius: 10, marginRight: 10 },
  details: { flex: 1 },
  medicineName: { fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
  button: {
    backgroundColor: '#6200ea',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    alignSelf: 'flex-start'
  },
  buttonText: { color: '#fff', fontWeight: 'bold' }
});
