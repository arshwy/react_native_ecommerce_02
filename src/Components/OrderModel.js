import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Button, Pressable, Text, Center, HStack, Modal, VStack, Image } from 'native-base';
import Colors from '../colors';
import Button_ from './Button';



const OrdersInfo = [
    {title: "Products", price: 276.00, color:"black"},
    {title: "Shipping", price: 25.35, color:"black"},
    {title: "Tax", price: 17.55, color:"black"},
    {title: "Total Amount", price: 318.90, color:"main"},
]

const OrderModel = () => {
    const [showModel, setShowModel] = useState(false);

  return (
    <Center w={"full"}>
        <Button_ 
            onPress={() => setShowModel(true)} 
            bg={Colors.main} 
            color={Colors.white}
            mt={5}>
            SHOW PAYMENT
        </Button_>
        <Modal
            isOpen={showModel}
            onClose={() => setShowModel(false)}
            size="lg">
            <Modal.Content maxWidth={350}>
                <Modal.CloseButton />
                <Modal.Header>Order Details</Modal.Header>
                <Modal.Body>
                    <VStack space={7}>
                        {OrdersInfo.map((info, index)=>(
                            <HStack
                                key={index}
                                alignItems={"center"}
                                justifyContent={"space-between"}>
                                <Text 
                                    fontWeight={"medium"}>
                                    {info.title}
                                </Text>
                                <Text 
                                    color={Colors[info.color]} 
                                    bold>
                                    ${info.price}
                                </Text>
                            </HStack>
                        ))}
                    </VStack>
                </Modal.Body>
                <Modal.Footer>
                    <Pressable
                        w="full"
                        justifyContent="center"
                        color={Colors.paypal}
                        h={45}
                        mb={2}
                        bg={Colors.orange}
                        onPress={()=>setShowModel(false)}>
                        <Image 
                            source={require("../../assets/images/paypal.png")}
                            alt="paypal"
                            resizeMode='contain'
                            w="full"
                            h={34}
                        />
                    </Pressable>
                    <Button
                        flex={1} 
                        bg={Colors.black} 
                        color={Colors.white}
                        h={45}
                        _text={{color: Colors.white}}
                        onPress={()=>setShowModel(false)}
                        _pressed={{bg:Colors.black,}}>
                        PAY LATER
                    </Button>
                </Modal.Footer>
            </Modal.Content>
        </Modal>
    </Center>
  )
}

export default OrderModel

const styles = StyleSheet.create({})