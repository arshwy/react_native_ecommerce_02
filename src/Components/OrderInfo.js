import { View,  } from 'react-native'
import React from 'react'
import { Center, Heading, Text } from 'native-base'
import Colors from '../colors'

const OrderInfo = ({icon,title,subTitle,text,success,danger}) => {
  return (
    <Center 
        bg={Colors.white} 
        w={200} py={2}
        rounded={10}
        shadow={4} 
        mb={2} 
        ml={5} 
        mr={1} 
        px={4}>
        <Center 
            bg={Colors.main} 
            w={60} 
            h={60} 
            rounded="full">
                {icon}
        </Center>
        <Heading 
            bold
            fontSize={12}
            isTruncatedmt={3}
            mt={2}
            color={Colors.black}>
            {title}
        </Heading>
        <Text
            fontSize={13}
            color={Colors.black}>
            {subTitle}
        </Text>
        <Text
            fontSize={13}
            color={Colors.black}
            textAlign="center"
            italic>
            {text}
        </Text>
        {success && (
            <Center
                py={2}
                mt={2}
                w="full"
                bg={Colors.gray}>
                <Text 
                    fontSize={14} 
                    color={Colors.main}>
                    Paid on Jan 2021
                </Text>
            </Center>
        )}
        {danger && (
            <Center
            py={2}
            mt={2}
            w="full"
            bg={Colors.gray}>
            <Text 
                fontSize={14} 
                color={Colors.red}>
                Not Delivered
            </Text>
        </Center>
        )}
    </Center>
  )
}

export default OrderInfo