import { Box, Button, Checkbox, Heading, Input, VStack } from 'native-base'
import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import Colors from "../colors"
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const RegisterScreen = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordType, setPasswordType] = useState("password")

  const handlingNameChange = (email) => {
    setName(email);
  }
  const handlingEmailChange = (email) => {
    setEmail(email);
  }
  const handlingPasswordChange = (password) => {
    setPassword(password);
  }
  const togglePaswordType = () => {
    if (passwordType == "password") {
      setPasswordType("text")
    }
    else if (passwordType == "text") {
      setPasswordType("password")
    }
  }

  const handlingRegister = () => {
    console.log("logging in ...")
    console.log("name: ", name)
    console.log("email: ", email)
    console.log("password: ", password)
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
        <Heading>REGISTER</Heading>
        <VStack space={5} pt={8}>
        <Input
            name="name"
            type='text'
            variant="underlined"
            placeholder='User Name'
            width="70%"
            color={Colors.main}
            borderBottomColor={Colors.underline}
            InputLeftElement={
              <FontAwesome name="user" size={24} color={Colors.main} />
            }
            pl={2}
            fontSize={16}
            onChangeText={handlingNameChange}
          />
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
            onPress={handlingRegister}
          >
            REGISTER
          </Button>
          <Pressable mt={4}>
            <Text
              style={styles.signupText} 
              size="sm"
            >
              LOG IN
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

export default RegisterScreen