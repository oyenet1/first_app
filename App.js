import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Bowofade First Mobile App</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal:5,
    paddingVertical: 30,
  },
  head:{
    color: 'white',
    backgroundColor: '#18f',
    padding: 20,
    fontSize: 20,
    width: '100%',
    textAlign: 'center',
    borderRadius: 7,
  },
});
