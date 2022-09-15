import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider, StatusBar } from "native-base";
import { StyleSheet, Text } from 'react-native';
import LoginScreen from './src/Screens/LoginScreen';
import RegisterScreen from './src/Screens/RegisterScreen';
import NotVerifiedScreen from "./src/Screens/NotVerifiedScreen";
import HomeScreen from "./src/Screens/HomeScreen";
import SingleProductScreen from "./src/Screens/SingleProductScreen";
import CartScreen from "./src/Screens/CartScreen";
import ProfileScreen from "./src/Screens/ProfileScreen";
import ShippingScreen from "./src/Screens/ShippingScreen";
import PaymentScreen from "./src/Screens/PaymentScreen";
import PlaceOrderScreen from "./src/Screens/PlaceOrderScreen";
import OrderScreen from "./src/Screens/OrderScreen";
import BottomNav from './src/Navigations/BottomNav';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer> 
        <StatusBar hidden={true} />
        <Stack.Navigator
          initialRouteName='Login'
          screenOptions={{ headerShown:false }}>
            <Stack.Screen name='Login' component={LoginScreen}/>
            <Stack.Screen name='Register' component={RegisterScreen}/>
            <Stack.Screen name='Order' component={OrderScreen}/>
            <Stack.Screen name='Bottom' component={BottomNav}/>
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}




export default App;
