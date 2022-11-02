import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NativeBaseProvider, VStack, Center, Text } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
        <Center flex={1} bgColor="blueGray.900">
          <Text color='white'>Test Texto</Text>
          <Text style={styles.title}>Open up App.js to!</Text>
          <StatusBar style="auto" />
        </Center>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 24
  }
});
