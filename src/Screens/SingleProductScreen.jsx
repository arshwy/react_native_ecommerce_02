import { Box, Heading, ScrollView, Text, Image, HStack, Spacer } from 'native-base'
import React, { useState } from 'react'
import {  View } from 'react-native'
import Colors from '../colors'
import Rating from '../Components/Rating'
import NumericInput from "react-native-numeric-input"
import Button_ from '../Components/Button'
import Review from '../Components/Review'



const SingleProductScreen = () => {
  const [orderCount, setOrderCount] = useState(0)

  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView 
        px={5}
        showsVerticalScrollIndicator={false}
      >
        <Image 
          source={require("../../assets/images/1.png")}
          alt="Image"
          w="full"
          h={300}
          //resizeMode="containe"
        />
        <Heading 
          fontSize={16} 
          mb={2} 
          lineHeight={22}>
          New Adidas shoe from store
        </Heading>
        <Rating value={3.5}/>
        <HStack 
          space={2} 
          alignItems="center" 
          my={5}
        >
          <NumericInput 
            value={orderCount} 
            totalWidth={140} 
            totalHeight={40}
            iconSize={25}
            step={1}
            maxValue={15}
            minValue={0}
            borderColor={Colors.deepGray}
            rounded 
            textColor={Colors.black}
            rightButtonBackgroundColor={Colors.main}
            leftButtonBackgroundColor={Colors.main}
          />
          <Spacer/>
          <Heading  bold color={Colors.black} fontSize={19}>
            $400
          </Heading>
        </HStack>
        <Text lineHeight={24} fontSize={14}>
          This prop can also contain several remote URLs, 
          specified together with their width and height and potentially with scale/other URI arguments. 
          The native side will then choose the best uri to display based on the measured size of the image container. 
          A cache property can be added to control how networked request interacts with the local cache.
          (For more information see Cache Control for Images).
          This prop can also contain several remote URLs, 
          specified together with their width and height and potentially with scale/other URI arguments. 
          The native side will then choose the best uri to display based on the measured size of the image container. 
        </Text>
        <Button_ 
          color={Colors.white} 
          bg={Colors.main} 
          mt={10}
        >
          ADD TO CART
        </Button_>
        <Review />
      </ScrollView>
    </Box>
  )
}

export default SingleProductScreen