import { useNavigation } from '@react-navigation/native'
import { Box, Button, Center, HStack, ScrollView, Text } from 'native-base'
import React from 'react'
import Colors from '../colors'
import Button_ from '../Components/Button'
import CartEmpty from '../Components/CartEmpty'
import CartItems from '../Components/CartItems'
import products from '../data/Products'

const CartScreen = ({navigation}) => {

  const nav = useNavigation();
  const addedItems = [
    products[0],
    products[1],
    products[2],
    products[3],
  ];
  const cartItems = [...addedItems];
 
  return (
    <Box flex={1} safeAreaTop bg={Colors.subGreen}>
      {
        cartItems.length ? 
        <>
          <Box 
            w="full"
            bg={Colors.main} 
            pt={6} 
            mb={10}
            safeAreaTop>
            <Center pb={15}>
              <Text color={Colors.white} fontSize={16} bold>
                CART
              </Text>
            </Center>
          </Box>
          <ScrollView
            showsVerticalScrollIndicator={false}>
            <CartItems />
            {/* Total */}
            <Center mt={5}>
              <HStack 
                rounded={50} 
                justifyContent="space-between" 
                bg={Colors.white}
                shadow={2}
                w="90%"
                pl={5}
                h={45}
                alignItems="center"
              >
                <Text>Total</Text>
                <Button 
                  px={10} 
                  rounded={50} 
                  bg={Colors.main}
                  color={Colors.white}
                  bold 
                  _text={{
                    color:Colors.white,
                    fontWeight:"semibold",
                  }}
                  _pressed={{
                    bg:Colors.main,
                  }}>
                  $350
                </Button>
              </HStack>
            </Center>
            {/* Checkout */}
            <Center px={5}>
              <Button_
                bg={Colors.black} 
                color={Colors.white} 
                my={10}
                onPress={()=>nav.navigate("Shipping")}>
                CHECKOUT
              </Button_>
            </Center>
          </ScrollView>
        </> :
        <CartEmpty />
      }
    </Box>
  )
}

export default CartScreen