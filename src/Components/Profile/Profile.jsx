import React from 'react'
import Colors from '../../colors'
import { Box, FormControl, Input, ScrollView, VStack } from 'native-base'
import Button_ from "../Button"

const Inputs = [
  { label:"USERNAME", type:"text", value:"User Name",},
  { label:"EMAIL", type:"email", value:"example@domain.com",},
  { label:"PASSWORD", type:"password", value:"password",},
  { label:"CONFIRM PASSWORD", type:"password", value:"",},
]


const Profile = () => {
  return (
    <Box 
      h="full" 
      bg={Colors.white} 
      px={5}>
      <ScrollView 
        showsVerticalScrollIndicator={false}>
        <VStack 
          space={10} 
          mt={3} 
          pb={10}>
          {Inputs.map((input, index)=> (
            <FormControl 
              key={index}>
              <FormControl.Label _text={{
                  fontWeight: "bold",
                  fontSize: 12,
              }}>{input.label}
              </FormControl.Label>
              <Input 
                type={input.type}
                borderColor= {Colors.main}
                borderWidth= {0.3}
                bg={Colors.subGreen} 
                color={Colors.main} 
                fontSize={16}
                _focus={{
                  bg: Colors.subGreen,
                  borderColor: Colors.main,
                  borderWidth: 1,
                }}>
              </Input>
            </FormControl>
          ))}
        <Button_ 
          bg={Colors.black} 
          color={Colors.white}>
          SAVE CHANGES
        </Button_>
        </VStack>
      </ScrollView>
    </Box>
  )
}

export default Profile