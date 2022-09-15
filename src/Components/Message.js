import { Text, Center } from 'native-base'
import React from 'react'

const Message = ({
    bg, color, children, size, bold, rounded=5, w="full", 
    mt, m, my, mx, p=4, py, px
}) => {

  return (
    <Center 
        bg={bg} 
        rounded={rounded} 
        w={w} 
        mt={mt}
        m={m}
        my={my}
        mx={mx}
        p={p}
        py={py}
        px={px}
    >
        <Text 
            color={color} 
            fontSize={size} 
            bold={bold}
        >
            {children}
        </Text>
    </Center>
  )
}

export default Message