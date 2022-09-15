import { StyleSheet, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Center, Text, useStyledSystemPropsResolver } from 'native-base';
import HomeScreen from '../Screens/HomeScreen';
import Colors from '../colors';
import { Entypo, AntDesign } from "@expo/vector-icons"

const Tab = createBottomTabNavigator();
const customTab = ({children,onPress}) => (<Text>Hi</Text>)
const BottomNav = () => {
  return (
    <Tab.Navigator 
        backBehavior='main' 
        initialRouteName='main' 
        screenOptions={{
            tabBarShownLabel:false,
            tabBarStyle:{...styles.tab},
            tabBarHideOnKeyboard:true,
        }}>
        <Tab.Screen 
            name="main" 
            component={HomeScreen} 
            options={{
                tabBarIcon:({focused}) => (
                    <Center>
                        {focused? (
                            <Entypo 
                                name="home" 
                                size={24} 
                                color={Colors.main}
                            />
                        ) : (
                            <AntDesign 
                                name="home" 
                                size={24} 
                                color={Colors.black} 
                            />
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