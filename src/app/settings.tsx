import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';

export default function SettingsScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.sectionHeader}>Preferences</Text>

      {/* Settings Options List */}
      <View style={styles.menuGroup}>
        <View style={styles.menuItem}>
          <View style={styles.menuLeft}>
            <Feather name="bell" size={22} color="#555" />
            <Text style={styles.menuText}>Notifications</Text>
          </View>
          <Feather name="chevron-right" size={20} color="#ccc" />
        </View>

        <View style={styles.divider} />

        <View style={styles.menuItem}>
          <View style={styles.menuLeft}>
            <MaterialIcons name="security" size={22} color="#555" />
            <Text style={styles.menuText}>Privacy & Security</Text>
          </View>
          <Feather name="chevron-right" size={20} color="#ccc" />
        </View>
      </View>
	  
	  <Pressable 
        style={styles.secondaryButton} 
        onPress={() => router.back()}
      >
        <Ionicons name="arrow-back" size={20} color="#007AFF" />
        <Text style={styles.secondaryButtonText}>Back to Feed</Text>
      </Pressable>

      <Pressable 
        style={styles.homeButton} 
        onPress={() => router.dismissAll()}
      >
        <Ionicons name="home-outline" size={20} color="#ff3b30" />
        <Text style={styles.homeButtonText}>Return to Home Screen</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f8f9fa' },
  sectionHeader: { fontSize: 14, fontWeight: '600', color: '#8e8e93', textTransform: 'uppercase', marginBottom: 10, marginTop: 20 },
  menuGroup: { backgroundColor: '#fff', borderRadius: 12, borderWidth: 1, borderColor: '#e5e5ea', marginBottom: 30 },
  menuItem: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 16 },
  menuLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  menuText: { fontSize: 16, color: '#1c1c1e' },
  divider: { height: 1, backgroundColor: '#e5e5ea', marginLeft: 50 },
  homeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffe5e5',
    paddingVertical: 14,
    borderRadius: 10,
    gap: 8,
  },
  homeButtonText: { color: '#ff3b30', fontSize: 16, fontWeight: '600' },
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
});