import { Container, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/layout'
import React from 'react'
import FeaturedItems from './FeaturedItems'
import Search from './Search'

const Main = () => {
  return (
    <Container maxW="container.lg" py="10">
      <Heading mb={4}>Find Your Favorite Dish Recipe !</Heading>
      <Search />
      <FeaturedItems />      
    </Container>
  )
}

export default Main
