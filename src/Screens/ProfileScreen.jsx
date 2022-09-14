import { Center, Heading, Image, Text } from 'native-base'
import React from 'react'
import Colors from '../colors'
import Tabs from '../Components/Profile/Tabs'

const ProfileScreen = () => {
  return (
    <>
      <Center bg={Colors.main} pt={16} pb={6} shadow={10}>
        <Center rounded={50} bg={Colors.white}>
          <Image 
            source={require("../../assets/images/user.png")} 
            alt="profile"
            w={70}
            h={70}
            resizeMode="cover"
          />
        </Center>
        <Heading fontSize={22} bold mt={5} color={Colors.white}>
          User Name
        </Heading>
        <Text italic fontSize={12} color={Colors.subGreen}>
          Joined Dec 12 2020
        </Text>
      </Center> 
      <Tabs />
    </>
  )
}

export default ProfileScreen