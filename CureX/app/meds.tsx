import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import TabNavigator from './components/TabNavigator';

export default function MedicinesScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Link href="/" asChild>
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={24} color="#6a1b9a" />
          </TouchableOpacity>
        </Link>
        <Text style={styles.title}>Medicines</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Ionicons name="search" size={20} color="#666666" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search medicines..."
            placeholderTextColor="#666666"
          />
        </View>
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <View style={styles.categoriesGrid}>
          {['Pain Relief', 'Antibiotics', 'Vitamins', 'First Aid'].map((category, index) => (
            <TouchableOpacity key={index} style={styles.categoryCard}>
              <Ionicons name="medical" size={32} color="#6a1b9a" />
              <Text style={styles.categoryText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Popular Medicines</Text>
        {['Paracetamol', 'Ibuprofen', 'Aspirin', 'Amoxicillin'].map((medicine, index) => (
          <TouchableOpacity key={index} style={styles.medicineCard}>
            <View style={styles.medicineInfo}>
              <Ionicons name="medical-outline" size={24} color="#6a1b9a" />
              <View style={styles.medicineDetails}>
                <Text style={styles.medicineName}>{medicine}</Text>
                <Text style={styles.medicineDescription}>Common pain reliever</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyButtonText}>Buy</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TabNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ffffff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#6a1b9a',
    marginLeft: 16,
  },
  searchContainer: {
    padding: 16,
    backgroundColor: '#ffffff',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 8,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: '#333333',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#6a1b9a',
    marginBottom: 16,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  categoryCard: {
    width: '48%',
    backgroundColor: '#f3e5f5',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryText: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '600',
    color: '#6a1b9a',
  },
  medicineCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  medicineInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  medicineDetails: {
    marginLeft: 12,
  },
  medicineName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
  },
  medicineDescription: {
    fontSize: 14,
    color: '#666666',
    marginTop: 4,
  },
  buyButton: {
    backgroundColor: '#6a1b9a',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  buyButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
}));