import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import { Box, Heading, Link, SimpleGrid, Stack } from '@chakra-ui/layout'
import React from 'react'
import { Link as ReachRouter } from 'react-router-dom'

const FeaturedItems = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10} py="10">
      <Stack spacing={4}> 
        <Box>
          <Link as={ReachRouter} to="/1">
            <Image
              height="150px"
              width="100%"
              objectFit="cover"
              src="https://images.unsplash.com/photo-1619337744931-97f65a4f14d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="food"
              mb="2"
            />
          </Link>
          <Heading as="h2" mb="2" size="sm"><Link as={ReachRouter} to="/1">Food Name</Link></Heading>
          <Button colorScheme="green" variant="solid">
            Add to Cart
          </Button>
        </Box>
      </Stack>
      <Stack spacing={4}> 
        <Box>
          <Link as={ReachRouter} to="/1">
            <Image
              height="150px"
              width="100%"
              objectFit="cover"
              src="https://images.unsplash.com/photo-1619337744931-97f65a4f14d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="food"
              mb="2"
            />
          </Link>
          <Heading as="h2" mb="2" size="sm"><Link as={ReachRouter} to="/1">Food Name</Link></Heading>
          <Button colorScheme="green" variant="solid">
            Add to Cart
          </Button>
        </Box>
      </Stack>
      <Stack spacing={4}> 
        <Box>
          <Link as={ReachRouter} to="/1">
            <Image
              height="150px"
              width="100%"
              objectFit="cover"
              src="https://images.unsplash.com/photo-1619337744931-97f65a4f14d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="food"
              mb="2"
            />
          </Link>
          <Heading as="h2" mb="2" size="sm"><Link as={ReachRouter} to="/1">Food Name</Link></Heading>
          <Button colorScheme="green" variant="solid">
            Add to Cart
          </Button>
        </Box>
      </Stack>
      <Stack spacing={4}> 
        <Box>
          <Link as={ReachRouter} to="/1">
            <Image
              height="150px"
              width="100%"
              objectFit="cover"
              src="https://images.unsplash.com/photo-1619337744931-97f65a4f14d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="food"
              mb="2"
            />
          </Link>
          <Heading as="h2" mb="2" size="sm"><Link as={ReachRouter} to="/1">Food Name</Link></Heading>
          <Button colorScheme="green" variant="solid">
            Add to Cart
          </Button>
        </Box>
      </Stack>
    </SimpleGrid>
  )
}

export default FeaturedItems
