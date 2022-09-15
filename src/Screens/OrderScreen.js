import React from 'react'
import { Box, ScrollView, Text, Center, VStack, Heading } from 'native-base'
import Colors from '../colors'
import OrderInfo from '../Components/OrderInfo'
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import OrderItem from '../Components/OrderItem';
import OrderModel from '../Components/OrderModel';



const OrderScreen = () => {
  return (
    <Box 
        bg={Colors.subGreen} 
        flex={1}>
        
        <Box 
          bg={Colors.main} 
          pt={6} 
          safeAreaTop>
          <Center pb={15}>
            <Text color={Colors.white} fontSize={16} bold>
              ORDER #23156132462
            </Text>
          </Center>
        </Box>
        
        <Box mt={5} w="full">
          <ScrollView w="full" horizontal={true} showsHorizontalScrollIndicator={false}>
            <OrderInfo 
              success
              title="SHIPPING INFO"
              subTitle="Shipping To: EGYPT"
              text="Paid By PayPal"  
              icon={
                <FontAwesome5 name="shipping-fast" size={30} color={Colors.white} />
              }
            />
            <OrderInfo 
              danger
              title="DELIVER TO"
              subTitle="Address"
              text="15th St. Downtown, Cairo"  
              icon={
                <Ionicons 
                  name="location-sharp" 
                  size={30} 
                  color={Colors.white}/>
              }
            />
          </ScrollView>
        </Box>
        <Box 
          px={6} 
          flex={1} 
          pb={3}>
          <Heading
            bold
            fontSize={15}
            isTruncated
            my={4}>
            PRODUCTS
          </Heading>
          <OrderItem />
          <OrderModel />
        </Box>
    </Box>
  )
}

export default OrderScreen