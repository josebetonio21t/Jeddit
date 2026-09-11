import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.iconHeader}>
        <MaterialCommunityIcons name="alpha-j-circle" size={24} color="black" />
      </View>
      <Text style={styles.title}>Welcome to Jeddit!</Text>
      <Button 
        title="Click to begin!" 
        onPress={() => router.push('/details')} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, marginBottom: 20 },
  iconHeader: { marginBottom: 16, backgroundColor: '#e1f0ff', padding: 16, borderRadius: 50 },
});