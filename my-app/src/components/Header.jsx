import { Box, Heading,Text } from '@chakra-ui/react'
import React from 'react'

function Header() {
  return (
    <div>
         <Box pb='112px' as='section' >
        <Box 
        align='center'
        color='#F7FAFC'
        bg='#6B46C1' 
        pt='90PX' 
        pb='198px'
        px='32px' >
            <Heading fontWeight='800px' fontSize='48px'>Simple pricing for your business </Heading>
            <Text fontSize='24px' fontWeight='500px'>
                Plans that are carefully crafted to suit your business.</Text>
        </Box>
        </Box>
    </div>
  )
}

export default Header