import { Box, Button, Heading, Input, VStack, Checkbox } from 'native-base'
import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import Colors from "../colors"
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

const LoginScreen = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordType, setPasswordType] = useState("password")

  const handlingEmailChange = (email) => {
    // console.log("email= ", email)
    setEmail(email);
  }
  const handlingPasswordChange = (password) => {
    // console.log("password= ", password)
    setPassword(password);
  }
  const handlingLogin = () => {
    console.log("logging in ...")
    console.log("email: ", email)
    console.log("password: ", password)
  }
  const togglePaswordType = () => {
    if (passwordType == "password") {
      setPasswordType("text")
    }
    else if (passwordType == "text") {
      setPasswordType("password")
    }
  }

  return (
    <Box 
      style={{backgroundColor: Colors.black}}
      flex={1} 
      alignItems="center" 
      justifyContent="center"
    >
      <Image 
          flex={1} 
          alt="login" 
          source={require("../../assets/cover.png")}
          resizeMode="cover"
          size="lg"
          style={styles.image}
      />
      <Box 
        style={styles.inputsBox}
        px={6}
        justifyContent="center"
      >
        <Heading>LOG IN</Heading>
        <VStack space={5} pt={8}>
          <Input
            name="email"
            type='email'
            variant="underlined"
            placeholder='user@gmail.com'
            width="70%"
            color={Colors.main}
            borderBottomColor={Colors.underline}
            InputLeftElement={
              <MaterialIcons name="email" size={24} color={Colors.main}/>
            }
            pl={2}
            fontSize={16}
            onChangeText={handlingEmailChange}
          />
          <Input
            name="password"
            type={passwordType}
            variant="underlined"
            placeholder='*********'
            width="70%"
            color={Colors.main}
            borderBottomColor={Colors.underline}
            InputLeftElement={
              <Ionicons name="eye" size={24} color={Colors.main}/>
            }
            pl={2}
            fontSize={16}
            onChangeText={handlingPasswordChange}
          />
          <Checkbox onChange={togglePaswordType}>
            Show Password
          </Checkbox>
        </VStack>
        <Button
            my={30}
            w="40%"
            rounded={50}
            bg={Colors.main}
            _pressed={{
              bg: Colors.main,
            }}
            _text={{
              color: Colors.white,
            }}
            onPress={handlingLogin}
          >
            LOGIN
          </Button>
          <Pressable mt={4}>
            <Text
              style={styles.signupText} 
              size="sm"
            >
              SIGN UP
            </Text>
          </Pressable>
      </Box>
    </Box>
  )
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000000",
    position: "relative"
  },
  inputsBox: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  input: {
    fontSize: 16,
  },
  signupText: {
    color: Colors.deepestGray,
  }
})

export default LoginScreen