import React from 'react'
import { 
  Box, Flex, Heading, Image, ScrollView, Pressable, Text
 } from 'native-base'
import Colors from '../colors'
import products from "../data/Products"
import Rating from './Rating'


const HomeProducts = () => {

  const handleOnPress = (p) => {
    console.log("Press on product: ", p.name, " id: ", p._id)
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} flex={1}>
      <Flex
        flexWrap="wrap" 
        direction="row"
        justifyContent="space-between"
        px={6}
      >
        {
          products.map((product, index) => {
            return (
              <Box 
                key={index} 
                w="47%"
                bg={Colors.white}
                rounded="md"
                shadow={2}
                my={3}
                pt={0.3}
                pb={2}
                overflow="hidden"
              >
                <Pressable onPress={()=>handleOnPress(product)}>
                  <Image 
                    source={product.image} 
                    alt={product.name}
                    w="full"
                    h={24}
                    resizeMode="contain"
                  />
                  <Box m={3}>
                    <Heading size="sm" bold>
                      ${product.price}
                    </Heading>
                    <Text 
                      fontSize={15} 
                      mt={1}
                      isTruncated
                      w="full"
                    >
                      {product.name}
                    </Text>
                    <Rating value={product.rating}/>
                  </Box>
                </Pressable>
              </Box>
            )
          })
        }
      </Flex>
    </ScrollView>
  )
}

export default HomeProducts