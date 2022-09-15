import { Box, Center, CheckIcon, FormControl, Heading, Select, Text, TextArea, VStack } from 'native-base'
import React, { useState } from 'react'
import Colors from '../colors'
import Button_ from './Button'
import Message from './Message'
import Rating from './Rating'

const Review = () => {

    const reviewsCount = 1;
    const [rating, setRating] = useState(null)
    const [comment, setComment] = useState(null)

    const handleRatingSelection = (value) => {
        setRating(value)
        console.log("you rated: ", value)
    }
    const handleCommentChange = (value) => {
        setComment(comment)
        console.log("commented: ", value)
    }
    const handleCommentSubmit = () => {
        console.log("submitting comment review ...");
    }
    const toLoginPage = () => {
        console.log("naviagting to login screen ...")
    }

    const isLoggedin = false;

  return (
    <Box flex={1} my={10}>
        <Heading 
            bold 
            fontSize={16} 
            mb={2}
        >
            REVIEW
        </Heading>
        {
            reviewsCount ?
            <Box 
                p={3} 
                bg={Colors.deepGray}
                rounded={5}
            >
                <Heading 
                    fontSize={16} 
                    color={Colors.black}
                >
                    User Name
                </Heading>
                <Rating value={3.5} />
                <Text mb={3} mt={2} fontSize={12}>
                    Dec-13-2021
                </Text>
                <Message bg={Colors.white} color={Colors.black}>
                    Retrieve the width and height (in pixels) of an image prior to displaying it. 
                    This method can fail if the image cannot be found, or fails to download.
                </Message>
            </Box> :
            <Message bg={Colors.deepGray} color={Colors.black} bold>
                NO REVIEWS
            </Message>
        }
        <Box mt={6}>
           <Heading fontSize={15} color={Colors.black} mb={4}>
                WRITE A REVIEW
           </Heading>
           <VStack>
                <FormControl>
                    <FormControl.Label _text={{
                        fontSize: "12",
                        fontWeight: "bold",
                    }}>
                        Rating
                    </FormControl.Label>
                    <Select 
                        bg={Colors.subGreen} 
                        borderWidth={0} 
                        rounded={3} py={3} 
                        placeholder="chooser rate"
                        _selectedItem={{
                            bg: Colors.subGreen,
                            endIcon: <CheckIcon size={5}/>
                        }}
                        selectedValue={rating}
                        onValueChange={handleRatingSelection}
                    >
                        <Select.Item label='1 - Poor' value='1'/>
                        <Select.Item label='1 - Fail' value='2'/>
                        <Select.Item label='1 - Good' value='3'/>
                    </Select>
                </FormControl>
                <FormControl>
                   <FormControl.Label _text={{
                        fontSize: "12",
                        fontWeight: "bold",
                    }}>
                        Comment
                    </FormControl.Label>
                    <TextArea
                        h={20}
                        w="full"
                        placeholder='Good product and good price ...'
                        borderWidth={0}
                        bg={Colors.subGreen}
                        py={2}
                        onChangeText={handleCommentChange}
                        _focus={{
                            bg: Colors.subGreen,
                        }}
                    ></TextArea>
                </FormControl>
                <Button_ 
                    bg={Colors.main} 
                    color={Colors.white}
                    mt={5}
                    onPress={isLoggedin ? handleCommentSubmit:toLoginPage}>
                    {isLoggedin ? "SUBMIT REVIEW":"LOGIN TO REVIEW"}
                </Button_>
           </VStack>
        </Box>
    </Box>
  )
}

export default Review