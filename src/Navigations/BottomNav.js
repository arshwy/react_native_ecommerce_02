import { StyleSheet, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Center, Pressable, Text } from 'native-base';
import HomeScreen from '../Screens/HomeScreen';
import Colors from '../colors';
import { Entypo, AntDesign, FontAwesome, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons"
import ProfileScreen from '../Screens/ProfileScreen';
import CartScreen from '../Screens/CartScreen';
import StackNav from './StackNav';

const Tab = createBottomTabNavigator();
const CustomTab = ({children,onPress}) => (
    <Pressable 
        onPress={onPress}
        _pressed={{bg: Colors.black,}} 
        h={70} 
        w={70}
        rounded="full"
        bg={Colors.main}
        top={-35}
        shadow={2}>
        {children}
    </Pressable>
)

const BottomNav = () => {
  return (
    <Tab.Navigator 
        backBehavior='Main' 
        initialRouteName='Main' 
        screenOptions={{ 
            tabBarShownLabel:false,
            tabBarStyle:{...styles.tab},
            headerShown: false,
            tabBarHideOnKeyboard:true,
        }}>

        <Tab.Screen 
            name="Main" 
            component={StackNav} 
            options={{
                tabBarShowLabel: false,
                tabBarIcon:({focused}) => (
                    <Center>
                        {focused? (
                            <Entypo name="home" size={24} color={Colors.main}/>
                        ) : (
                            <AntDesign name="home" size={24} color={Colors.black}/>
                        )}
                    </Center>
                )
        }}/>

        <Tab.Screen 
            name="Cart" 
            component={CartScreen} 
            options={{
                tabBarShowLabel: false,
                tabBarButton: (props) => <CustomTab {...props}/>,
                tabBarIcon:({focused}) => (
                    <Center>
                        {focused? (
                            <FontAwesome5 
                                name="shopping-basket" 
                                size={24} 
                                color={Colors.white}
                            />
                        ) : (
                            <MaterialCommunityIcons 
                                name="shopping-outline" 
                                size={24} 
                                color={Colors.white}
                            />
                        )}
                    </Center>
                )
        }}/>

        <Tab.Screen 
            name="Profile" 
            component={ProfileScreen} 
            options={{
                tabBarShowLabel: false,
                tabBarIcon:({focused}) => (
                    <Center>
                        {focused? (
                            <FontAwesome name="user" size={24} color={Colors.main}/>
                        ) : (
                            <AntDesign name="user" size={24} color={Colors.black}/>
                        )}
                    </Center>
                )
        }}/>

    </Tab.Navigator>
  )
}


const styles = StyleSheet.create({
    tab: {
        elevation: 0,
        backgroundColor:Colors.white,
        height:60,
    },
})

export default BottomNav