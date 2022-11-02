import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, VStack, Center, Text } from "native-base";
import { THEME } from './src/styles/theme';
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto'

import { SignIn } from './src/screens/Signin';
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_500Medium, Roboto_700Bold })


  return (
    <NativeBaseProvider theme={THEME}>
      
        {fontsLoaded ? <SignIn /> : < Loading />}

    </NativeBaseProvider>
  );
}

