import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Box } from "native-base";
import { StyleSheet, Text } from 'react-native';
import LoginScreen from './src/Screens/LoginScreen';
import RegisterScreen from './src/Screens/RegisterScreen';
import NotVerifiedScreen from "./src/Screens/NotVerifiedScreen";
import HomeScreen from "./src/Screens/HomeScreen";


export default function App() {
  return (
    <NativeBaseProvider>
      <HomeScreen />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({

});
