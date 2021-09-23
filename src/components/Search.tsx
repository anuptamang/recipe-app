import React from 'react'
import { Button } from '@chakra-ui/button'
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Box, Flex } from '@chakra-ui/layout'
import { SearchIcon } from '@chakra-ui/icons'
import { Checkbox } from '@chakra-ui/checkbox'
import Checkboxes from './Checkboxes'


const Search = () => {
  const handleSubmit = () => {
    
  }

  return (
    <Box maxW="50%">
      <Flex alignItems="flex-end" mb="2">
        <FormControl>
          <FormLabel htmlFor="search">Search Here:</FormLabel>
          <Input id="search" placeholder="Search" borderRightRadius="0" borderBottomRightRadius="0" />
        </FormControl>
        <Button
          mt={4}
          colorScheme="blue"
          borderTopLeftRadius	="0" 
          borderBottomLeftRadius="0"
          type="submit"
        >
          <SearchIcon />
        </Button>
      </Flex>
      <Checkboxes />
    </Box>
  )
}

export default Search
