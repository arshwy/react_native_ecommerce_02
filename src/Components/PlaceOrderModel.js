import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Text, Button, Center, HStack, Modal, VStack } from 'native-base';
import Colors from '../colors';
import Button_ from './Button';
import { useNavigation } from '@react-navigation/native';



const OrdersInfo = [
    {title: "Products", price: 276.00, color:"black"},
    {title: "Shipping", price: 25.35, color:"black"},
    {title: "Tax", price: 17.55, color:"black"},
    {title: "Total Amount", price: 318.90, color:"main"},
]

const PlaceOrderModel = () => {
    const [showModel, setShowModel] = useState(false);
    const nav = useNavigation();

    const handleOnPressOrder = () => {
        setShowModel(false)
        nav.navigate("Order")
    }
  return (
    <Center w={"full"}>
        <Button_ 
            onPress={() => setShowModel(true)} 
            bg={Colors.black} 
            color={Colors.white}
            mt={5}>
            SHOW TOTAL
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
                    <Button_
                        flex={1} 
                        bg={Colors.main} 
                        color={Colors.white}
                        h={45}
                        _text={{color: Colors.white}}
                        onPress={handleOnPressOrder}
                        _pressed={{bg:Colors.main,}}>
                        PLACE AN ORDER
                    </Button_>
                </Modal.Footer>
            </Modal.Content>
        </Modal>
    </Center>
  )
}

export default PlaceOrderModel

const styles = StyleSheet.create({})