import React from 'react'
import { 
    Box, 
    ScrollView, 
    Pressable, 
    HStack, 
    Text, 
    Image, 
    Button,
 } from 'native-base'
import Colors from '../../colors'
import products from "../../data/Products"

const Orders = () => {
  const orders = products.splice(0,5);
  return (
    <Box h="full" bg={Colors.white} pt={5}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Order />
        <Order />
        <Order />
      </ScrollView>
    </Box>
  )
}

const Order = () => {
  return (
    <Pressable py={3}>
      <HStack 
        space={2} 
        justifyContent="space-between"
        alignItems="center"
        bg={Colors.deepGray}
        py={3}
        px={4}>
          <Image 
            source={require("../../../assets/images/1.png")}
            alt="order details"
            w={16}
            h={16}
          />
          <Text 
            fontSize={10}
            color={Colors.blue}
            isTruncated>
            654987123
          </Text>
          <Text 
            fontSize={10}
            color={Colors.black}
            isTruncated
            bold>
            PAID
          </Text>
          <Text 
            fontSize={10}
            color={Colors.black}
            isTruncated
            bold 
            italic>
            Dec 21 2021
          </Text>
          <Button 
            rounded="50"
            px={7}
            py={2}
            bg={Colors.main}
            color={Colors.white}
            _pressed={{
              bg: Colors.main,
              color: Colors.white,
            }}>
            $125
          </Button>
      </HStack>
    </Pressable>
  )
}

export default Orders