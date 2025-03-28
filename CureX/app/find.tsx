import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import TabNavigator from './components/TabNavigator';

export default function FindDoctorsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Link href="/" asChild>
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={24} color="#00695c" />
          </TouchableOpacity>
        </Link>
        <Text style={styles.title}>Find Doctors</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Ionicons name="search" size={20} color="#666666" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search doctors by name or specialty"
            placeholderTextColor="#666666"
          />
        </View>
      </View>

      <ScrollView style={styles.content}>
        {[1, 2, 3, 4, 5].map((_, index) => (
          <TouchableOpacity key={index} style={styles.doctorCard}>
            <View style={styles.doctorInfo}>
              <View style={styles.avatar}>
                <Ionicons name="person" size={32} color="#00695c" />
              </View>
              <View style={styles.details}>
                <Text style={styles.doctorName}>Dr. John Doe</Text>
                <Text style={styles.specialty}>Cardiologist</Text>
                <Text style={styles.location}>2.5 km away</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.bookButton}>
              <Text style={styles.bookButtonText}>Book</Text>
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
    color: '#00695c',
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
  doctorCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  doctorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#e0f2f1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  details: {
    marginLeft: 12,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
  },
  specialty: {
    fontSize: 14,
    color: '#666666',
    marginTop: 4,
  },
  location: {
    fontSize: 12,
    color: '#00695c',
    marginTop: 4,
  },
  bookButton: {
    backgroundColor: '#00695c',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  bookButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
}));