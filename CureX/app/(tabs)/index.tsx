import { useRouter } from 'expo-router';
import { View, Button, Text } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Home</Text>
      <Button 
        title="Go to Medicine Search" 
        onPress={() => router.push('/medicine-search')}  // ✅ Corrected route
      />
    </View>
  );
}
