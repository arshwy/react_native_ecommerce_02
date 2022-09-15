import { StyleSheet } from 'react-native'
import React from 'react'
import { Text, Image, Box, Center, FlatList, HStack, Pressable, VStack, Button } from 'native-base'
import Colors from '../colors'
import products from '../data/Products'

const OrderItem = () => {
    
  return (
    <FlatList
        showsVerticalScrollIndicator={false}
        data={products.slice(0,6)}
        keyExtractor={(item) => item._id}
        renderItem={({item}) => (
            <Pressable>
                <Box mb={3}>
                    <HStack
                        alignItems="center"
                        bg={Colors.white}
                        shadow={1}
                        rounded={10}
                        overflow="hidden"
                    >
                        <Center 
                            w="25%"
                            bg={Colors.deepGray}>
                            <Image 
                                source={item.image}
                                alt={item.name}
                                w="full"
                                h={24}
                                resizeMode="contain"    
                            />
                        </Center>
                        <VStack 
                            w="60%" 
                            px={2}>
                            <Text
                                iaTruncated
                                color={Colors.black}
                                bold
                                fontSize={12}>
                                {item.name}
                            </Text>
                            <Text 
                                color={Colors.lightBlack}
                                mt={2}
                                bold>
                                ${item.price}
                            </Text>
                        </VStack>
                        <Center>
                            <Button 
                                bg={Colors.main}
                                _pressed={{ bg: Colors.main }}
                                _text={{ color: Colors.white }}>
                                5
                            </Button>
                        </Center>
                    </HStack>
                </Box>
            </Pressable>
        )}>
      
    </FlatList>
  )
}

export default OrderItem

const styles = StyleSheet.create({})