import { Box, Heading, ScrollView, Text, Image, HStack, Spacer } from 'native-base'
import React, { useState } from 'react'
import {  View } from 'react-native'
import Colors from '../colors'
import Rating from '../Components/Rating'
import NumericInput from "react-native-numeric-input"
import Button_ from '../Components/Button'
import Review from '../Components/Review'
import { useNavigation } from '@react-navigation/native'



const SingleProductScreen = ({route}) => {
  const [orderCount, setOrderCount] = useState(0)
  const nav = useNavigation()
  const product = route.params

  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView 
        px={5}
        showsVerticalScrollIndicator={false}
      >
        <Image 
          source={product.image}
          alt="Image"
          w="full"
          h={300}
          //resizeMode="containe"
        />
        <Heading 
          fontSize={16} 
          mb={2} 
          lineHeight={22}>
          {product.name}
        </Heading>
        <Rating 
          value={product.rating}
          text={product.numReviews}/>
        <HStack 
          space={2} 
          alignItems="center" 
          my={5}>
          {
            product.countInStock > 0 ? 
              <NumericInput 
                value={orderCount} 
                totalWidth={140} 
                totalHeight={40}
                iconSize={25}
                step={1}
                maxValue={product.countInStock}
                minValue={0}
                borderColor={Colors.deepGray}
                rounded 
                textColor={Colors.black}
                rightButtonBackgroundColor={Colors.main}
                leftButtonBackgroundColor={Colors.main}
              /> :
            <Text 
              bold
              italic 
              color={Colors.red}>
              Not Available in Stock
            </Text>
          }
          <Spacer/>
          <Heading  bold color={Colors.black} fontSize={19}>
            ${product.price}
          </Heading>
        </HStack>
        <Text lineHeight={24} fontSize={14}>
          {product.description}
        </Text>
        {
          product.countInStock > 0 ? 
          <Button_ 
            onPress={nav.navigate("Cart")}
            color={Colors.white} 
            bg={Colors.main} 
            mt={10}>
            ADD TO CART
          </Button_> : null
        }
        <Review />
      </ScrollView>
    </Box>
  )
}

export default SingleProductScreen