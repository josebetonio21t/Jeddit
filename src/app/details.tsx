import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons, Feather } from '@expo/vector-icons';

export default function DetailsScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.iconHeader}>
        <Ionicons name="information-circle-outline" size={64} color="#007AFF" />
      </View>

      <Text style={styles.title}>Feed Page is under Construction</Text>
      <Text style={styles.subtitle}>Explore settings or return home using the options below.</Text>

      <Pressable 
        style={styles.primaryButton} 
        onPress={() => router.push('/settings')}
      >
        <Feather name="settings" size={20} color="#fff" />
        <Text style={styles.buttonText}>Go to Settings</Text>
        <Feather name="chevron-right" size={20} color="#fff" />
      </Pressable>

      <Pressable 
        style={styles.secondaryButton} 
        onPress={() => router.back()}
      >
        <Ionicons name="arrow-back" size={20} color="#007AFF" />
        <Text style={styles.secondaryButtonText}>Back</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center', alignItems: 'center' },
  iconHeader: { marginBottom: 16, backgroundColor: '#e1f0ff', padding: 16, borderRadius: 50 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  subtitle: { fontSize: 14, color: '#666', textAlign: 'center', marginBottom: 32 },
  primaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    gap: 10,
    width: '100%',
    justifyContent: 'center',
    marginBottom: 12,
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  secondaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    gap: 8,
  },
  secondaryButtonText: { color: '#007AFF', fontSize: 16, fontWeight: '600' },
});