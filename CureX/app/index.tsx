import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import TabNavigator from './components/TabNavigator';

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>MediScan</Text>
      </View>

      <View style={styles.content}>
        <Link href="/scan" asChild>
          <TouchableOpacity style={[styles.card, styles.scanCard]}>
            <Ionicons name="document-outline" size={32} color="#1a237e" />
            <Text style={[styles.cardText, { color: '#1a237e' }]}>Scan Medical Report</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/sos" asChild>
          <TouchableOpacity style={[styles.card, styles.sosCard]}>
            <Ionicons name="warning-outline" size={32} color="#d32f2f" />
            <Text style={[styles.cardText, { color: '#d32f2f' }]}>Emergency SOS</Text>
          </TouchableOpacity>
        </Link>

        <View style={styles.bottomRow}>
          <Link href="/find" asChild>
            <TouchableOpacity style={[styles.smallCard, styles.findCard]}>
              <Ionicons name="people-outline" size={24} color="#00695c" />
              <Text style={[styles.smallCardText, { color: '#00695c' }]}>Find Doctors</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/meds" asChild>
            <TouchableOpacity style={[styles.smallCard, styles.medsCard]}>
              <Ionicons name="medical-outline" size={24} color="#6a1b9a" />
              <Text style={[styles.smallCardText, { color: '#6a1b9a' }]}>Medicines</Text>
            </TouchableOpacity>
          </Link>
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
    padding: 16,
    backgroundColor: '#1a237e',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#ffffff',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 24,
    marginBottom: 16,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  scanCard: {
    backgroundColor: '#e8eaf6',
  },
  sosCard: {
    backgroundColor: '#ffebee',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  smallCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginHorizontal: 4,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  findCard: {
    backgroundColor: '#e0f2f1',
  },
  medsCard: {
    backgroundColor: '#f3e5f5',
  },
  cardText: {
    marginTop: 12,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  smallCardText: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },

}