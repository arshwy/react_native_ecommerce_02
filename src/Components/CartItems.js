import { Text, Box, HStack, Pressable, Center, Image, VStack, Button } from 'native-base'
import React from 'react'
import {SwipeListView} from "react-native-swipe-list-view"
import Colors from '../colors'
import products from '../data/Products'
import { FontAwesome } from '@expo/vector-icons';


const Swiper = () => {
    return <SwipeListView 
        rightOpenValue={-50}
        previewRowKey="0"
        previewOpenValue={-40}
        previewOpenDelay={30000}
        data={products.slice(0,6)}
        renderItem={renderItems}
        renderHiddenItem={renderHiddenItems}
        showsVerticalScrollIndicator={false}
    >

    </SwipeListView>
}

// On-view items
const renderItems = (data) => {
    return (
        <Pressable>
            <Box ml={6} mb={3}>
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
                            source={data.item.image}
                            alt={data.item.name}
                            h={24}
                            resizeMode="center"
                        />
                    </Center>
                    <VStack w="60%" px={2}>
                        <Text 
                            isTruncated 
                            color={Colors.black} 
                            bold 
                            fontSize={14}>
                            {data.item.name}
                        </Text>
                        <Text color={Colors.black}>
                            ${data.item.price}
                        </Text>
                    </VStack>
                    <Center>
                        <Button
                            bg={Colors.main}
                            _pressed={{bg:Colors.main,}}
                            _text={{color:Colors.white,}}
                        >
                            5
                        </Button>
                    </Center>
                </HStack>
            </Box>
        </Pressable>
    )
}

// Hidden items
const renderHiddenItems = () => {
    return (
        <Pressable 
            w={"50%"} 
            roundedTopRight={10} 
            roundedBottomRight={10}
            justfyContent="center"
            bg={Colors.red}
            h="88%"
            ml="auto"
            mb={3}>
            <Box
                mt={8} 
                mb={3}
                px={3}
                space={2}
                alignItems="flex-end"
                justifyContent="center"
            >
                <FontAwesome 
                    name="trash" 
                    size={24} 
                    color={Colors.white} 
                />
            </Box>
        </Pressable>
    )
}

const CartItems = ({}) => {
  return (
    <Box mr={6}>
        <Swiper></Swiper>
    </Box>
  )
}

export default CartItems