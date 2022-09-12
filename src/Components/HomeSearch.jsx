import { Box, HStack, Input } from 'native-base'
import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import Colors from '../colors'
import { FontAwesome5 } from '@expo/vector-icons';

const HomeSearch = () => {
  return (
    <HStack 
        space={3} 
        w="full" 
        px={6} 
        py={4} 
        bg={Colors.main}
        alignItems="center"
        safeAreaTop
    >
        <Input 
            variant="filled"
            placeholder='search products ...' 
            w="85%" 
            bg={Colors.white}
            type="search"
            h={12}
            borderWidth={0}
            _focus={{
                bg: Colors.white,
                color: Colors.black,
            }}
            style={styles.input}
        />
        <Pressable>
           <FontAwesome5 
                name="shopping-basket" 
                size={24} 
                color={Colors.white}
            />
            <Box 
                px={1} 
                rounded="full" 
                position="absolute" 
                top={-13}
                left={2}
                bg={Colors.red}
                _text={{
                    color: Colors.white, 
                    fontSize:"11px",   
                }}
            >
                5
            </Box>
        </Pressable>
    </HStack>
  )
}

const styles = StyleSheet.create({
    input: {
        fontSize: 16,
    }
})

export default HomeSearch