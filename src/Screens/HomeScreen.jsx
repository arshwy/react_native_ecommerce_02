import { Box } from 'native-base'
import React from 'react'
import { View, Text } from 'react-native'
import Colors from '../colors'
import HomeProducts from '../Components/HomeProducts'
import HomeSearch from '../Components/HomeSearch'

const HomeScreen = () => {
  return (
    <Box flex={1} bg={Colors.subGreen}>
        <HomeSearch />
        <HomeProducts />
    </Box>
  )
}

export default HomeScreen