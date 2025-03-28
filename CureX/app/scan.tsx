import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import TabNavigator from './components/TabNavigator';

export default function ScanScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Link href="/" asChild>
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={24} color="#1a237e" />
          </TouchableOpacity>
        </Link>
        <Text style={styles.title}>Scan Medical Report</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.scanArea}>
          <Ionicons name="scan-outline" size={64} color="#1a237e" />
          <Text style={styles.scanText}>Position your medical report within the frame</Text>
        </View>

        <TouchableOpacity style={styles.captureButton}>
          <Ionicons name="camera" size={32} color="#ffffff" />
        </TouchableOpacity>

        <View style={styles.recentScans}>
          <Text style={styles.recentTitle}>Recent Scans</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scansScroll}>
            {[1, 2, 3].map((_, index) => (
              <TouchableOpacity key={index} style={styles.scanPreview}>
                <Ionicons name="document-text" size={32} color="#1a237e" />
                <Text style={styles.previewText}>Scan {index + 1}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
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
    color: '#1a237e',
    marginLeft: 16,
  },
  content: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  scanArea: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: '#e8eaf6',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 24,
    borderWidth: 2,
    borderColor: '#1a237e',
    borderStyle: 'dashed',
  },
  scanText: {
    marginTop: 16,
    fontSize: 16,
    color: '#1a237e',
    textAlign: 'center',
  },
  captureButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#1a237e',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 24,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  recentScans: {
    width: '100%',
  },
  recentTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a237e',
    marginBottom: 12,
  },
  scansScroll: {
    flexGrow: 0,
  },
  scanPreview: {
    width: 100,
    height: 100,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  previewText: {
    marginTop: 8,
    fontSize: 12,
    color: '#1a237e',
  },
});