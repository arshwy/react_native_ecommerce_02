import { Center, View, Text, Box } from 'native-base'
import React from 'react'
import Colors from '../colors'
import { FontAwesome } from '@expo/vector-icons';
import Button_ from './Button';


const CartEmpty = () => {
    const navigateToHomeScreen = () => {
        console.log("Navigating to Home Screen ...")
    }
  return (
    <Box flex={1} px={4}>
        <Center h="90%">
            <Center w={200} h={200} bg={Colors.white} rounded="full">
               <FontAwesome 
                    name="shopping-basket" 
                    size={100} 
                    color={Colors.main}
                />
            </Center>
            <Text 
                color={Colors.main}
                bold
                mt={5}
                fontSize={16}
            >
                CART IS EMPY
            </Text>
        </Center>
        <Button_
            bg={Colors.black}
            color={Colors.white}
            onPress={navigateToHomeScreen}
        >
            START SHOPPING
        </Button_>
    </Box>
  )
}

export default CartEmpty