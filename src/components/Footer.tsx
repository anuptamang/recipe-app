import { Box, Container, Flex, Link, Text } from '@chakra-ui/layout'
import React from 'react'
import { Link as ReachLink } from 'react-router-dom'

const Footer = () => {
  return (
   <Box bg="blue.400" py="2" pos="fixed" bottom="0" left="0" right="0" zIndex="888">
      <Container maxW="container.lg">
        <Flex justifyContent="space-between">
          <Box>
            <Text color="white">All Rights Reserved &copy; Recipe App</Text>
          </Box>
          <Box>
            <Text color="white">Developed By: <Text as={'span'} color="red.100"><Link href="https://chakra-ui.com" isExternal>JASPER</Link></Text></Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Footer
