import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import TabNavigator from './components/TabNavigator';

export default function SOSScreen() {
  const handleEmergency = () => {
    Alert.alert(
      'Emergency SOS',
      'This will contact emergency services. Do you want to proceed?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Call Emergency', style: 'destructive', onPress: () => console.log('Emergency called') }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Link href="/" asChild>
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={24} color="#d32f2f" />
          </TouchableOpacity>
        </Link>
        <Text style={styles.title}>Emergency SOS</Text>
      </View>

      <View style={styles.content}>
        <TouchableOpacity style={styles.emergencyButton} onPress={handleEmergency}>
          <Ionicons name="warning" size={64} color="#ffffff" />
          <Text style={styles.emergencyText}>EMERGENCY</Text>
        </TouchableOpacity>

        <View style={styles.contactsContainer}>
          <Text style={styles.contactsTitle}>Emergency Contacts</Text>
          <View style={styles.contactItem}>
            <Ionicons name="call" size={24} color="#d32f2f" />
            <Text style={styles.contactText}>Ambulance: 911</Text>
          </View>
          <View style={styles.contactItem}>
            <Ionicons name="medkit" size={24} color="#d32f2f" />
            <Text style={styles.contactText}>Hospital: +1 234 567 8900</Text>
          </View>
        </View>
      </View>

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
    color: '#d32f2f',
    marginLeft: 16,
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  emergencyButton: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: '#d32f2f',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  emergencyText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
  },
  contactsContainer: {
    width: '100%',
    marginTop: 24,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
  },
  contactsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#d32f2f',
    marginBottom: 16,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  contactText: {
    fontSize: 16,
    marginLeft: 12,
    color: '#333333',
  },
}));