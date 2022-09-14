import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Box } from "native-base";
import { StyleSheet, Text } from 'react-native';
import LoginScreen from './src/Screens/LoginScreen';
import RegisterScreen from './src/Screens/RegisterScreen';
import NotVerifiedScreen from "./src/Screens/NotVerifiedScreen";
import HomeScreen from "./src/Screens/HomeScreen";
import SingleProductScreen from "./src/Screens/SingleProductScreen";
import CartScreen from "./src/Screens/CartScreen";
import ProfileScreen from "./src/Screens/ProfileScreen";
import ShippingScreen from "./src/Screens/ShippingScreen";

export default function App() {
  return (
    <NativeBaseProvider>
      <ShippingScreen />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({

});
