import { Box, Center, Image, VStack } from 'native-base'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../colors'
import Button from '../Components/Button'

const NotVerifiedScreen = () => {
  return (
    <Box
        flex={1}
        bg={Colors.main}
        safeAreaTop
      >
        <Center w="full" mt={20} mb={10}>
          <Image alt="shop icon" source={require("../../assets/icon2.png")} style={styles.image}/>
        </Center>
        <Center>
          <Text style={styles.text}>
            Not Verified User!
          </Text>
        </Center>
        <VStack space={6} px={5} pt={10} alignItems="center">
          <Button
            mt={5}
            bg={Colors.white} 
          >
            REGISTER
          </Button>
          <Button
            mt={5}
            bg={Colors.white} 
          >
            LOG IN
          </Button>
        </VStack>
    </Box>
  )
}


const styles = StyleSheet.create({
  text: {
    color: Colors.white,
    fontSize: 20,
  },
  image: {
    height: 150,
  }
})



export default NotVerifiedScreen