import { Box, Container, Flex, Link } from '@chakra-ui/layout'
import React from 'react'
import { Link as ReachLink } from 'react-router-dom'
import { ColorModeSwitcher } from '../ColorModeSwitcher'

const Header = () => {
  return (
    <Box bg="blue.400" py="3">
      <Container maxW="container.lg">
        <Flex justifyContent="space-between">
          <Box>
            <Link as={ReachLink} color="white" fontSize="xl" to="/">Recipe App</Link>
          </Box>
          <Box>
            <Flex justifyContent="flex-end">
              <Box pt={1}>
               <Flex>
                  <Box>
                    <Link as={ReachLink} color="white" fontSize="lg" p={3} to="/">Home</Link>
                  </Box>
                  <Box>
                    <Link as={ReachLink} color="white" fontSize="lg" p={3} to="/cart">Cart</Link>
                  </Box>
                  <Box>
                    <Link as={ReachLink} color="white" fontSize="lg" p={3} to="/login">Login</Link>
                  </Box>
                  <Box>
                    <Link as={ReachLink} color="white" fontSize="lg" p={3} to="/logout">logout</Link>
                  </Box>
               </Flex>
               </Box>
              <Box>
                <ColorModeSwitcher justifySelf="flex-end" />
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Header
