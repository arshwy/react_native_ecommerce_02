import { Image, Box, Center, FormControl, HStack, Input, ScrollView, Spacer, Text, VStack } from 'native-base'
import React from 'react'
import { View } from 'react-native'
import Colors from '../colors'
import Button_ from "../Components/Button"
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

const PaymentMethods = [
  {
    image: require("../../assets/images/paypal.png"),
    alt: "paypal",
    selected:true,
  },
  {
    image: require("../../assets/images/discover.png"),
    alt: "discover",
    selected:false,
  },
  {
    image: require("../../assets/images/googlepay.png"),
    alt: "googlepay",
    selected:false,
  },
];


const PaymentScreen = () => {
  const nav = useNavigation();
  return (
    <Box flex={1} safeAreaTop bg={Colors.main} py={5}>

        <Center pb={15}>
          <Text color={Colors.white} fontSize={14} bold>
            PAYMENT METHOD
          </Text>
        </Center>

        <Box h={"full"} bg={Colors.subGreen} px={5} pt={5}>
          <ScrollView showsVerticalScrollIndicator={false}>
              <VStack space={6} mt={5}>
                {PaymentMethods.map((method, index)=>(
                  <HStack 
                    key={index}
                    alignItems="center" 
                    justifyContent="space-between"
                    bg={Colors.white}
                    px={3}
                    py={1}
                    rounded={10}>
                    <Box mx={2}>
                      <Image 
                        source={method.image}
                        alt={method.alt}
                        resizeMode="contain"
                        w={60}
                        h={50}
                      />
                      <Spacer />
                    </Box>
                    {
                      method.selected ?
                      <Ionicons 
                        name="checkmark-circle" 
                        size={30}
                        color={Colors.main} 
                      /> :
                      <FontAwesome 
                        name="circle-thin" 
                        size={30}
                        color={Colors.main}
                      />
                    }
                    
                  </HStack>
                ))}
                <Button_
                  onPress={()=>nav.navigate("Placeorder")} 
                  mt={3}
                  bg={Colors.black} 
                  color={Colors.white}>
                  CONTINUE
                </Button_>
                <Text italic 
                  textAlign="center">
                  Payment method is <Text bold>PayPal</Text> by default
                </Text>
              </VStack>
          </ScrollView>
        </Box>
        
    </Box>
  )
}

export default PaymentScreen
