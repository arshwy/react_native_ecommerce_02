import React from 'react'
import { Button } from 'native-base'

const Button_ = ({
  bg, color, children, onPress, my,
  mt, mx,
}) => {
  return (
    <Button
        w="full"
        h={55} 
        mt={mt}
        mx={mx}
        my={my}
        rounded="full"
        bg={bg}
        _text={{
            color:color, fontWeight:"bold,"
        }}
        _pressed={{bg:bg, color:color}}
        onPress={onPress}
    >
        {children}
    </Button>
  )
}

export default Button_