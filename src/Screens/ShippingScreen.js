import { useNavigation } from '@react-navigation/native'
import { Box, Center, FormControl, Input, ScrollView, Text, VStack } from 'native-base'
import React from 'react'
import { View } from 'react-native'
import Colors from '../colors'
import Button_ from "../Components/Button"

const ShippingInputs = [
  {label:"ENTER CITY", type:"text",},
  {label:"ENTER COUNTRY", type:"text",},
  {label:"ENTER POSTAL CODE", type:"text",},
  {label:"ENTER ADDRESS", type:"text",},
];


const ShippingScreen = () => {
  const nav = useNavigation()
  return (
    <Box flex={1} safeAreaTop bg={Colors.main} py={5}>
        <Center pb={15}>
          <Text color={Colors.white} fontSize={14} bold>
            DELIVERY ADDRESS
          </Text>
        </Center>
        <Box h={"full"} bg={Colors.white} px={5}>
          <ScrollView showsVerticalScrollIndicator={false}>
              <VStack space={6} mt={5}>
                {ShippingInputs.map((input, index)=>(
                  <FormControl key={index}>
                    <FormControl.Label _text={{
                      fontSize: 12,
                      fontWeight: "bold",
                    }}>
                      {input.label}
                    </FormControl.Label>
                    <Input 
                      type={input.type}
                      fontSize={14}
                      borderWidth={0.2}
                      borderColor={Colors.main}
                      bg={Colors.subGreen}
                      py={3}
                      color={Colors.main}
                      _focus={{
                        bg: Colors.subGreen,
                        borderWidth: 1,
                        borderColor: Colors.main,
                      }}>
                    </Input>
                  </FormControl>
                ))}
                <Button_ 
                  onPress={()=>nav.navigate("Checkout")}
                  mt={3}
                  bg={Colors.black} 
                  color={Colors.white}>
                  CONTINUE
                </Button_>
              </VStack>
          </ScrollView>
        </Box>
    </Box>
  )
}

export default ShippingScreen