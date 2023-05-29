import { Box, Heading,Text } from '@chakra-ui/react'
import React from 'react'
import Login from '../Login/Login'

function Header() {
  return (
    <div>
         <Box pb='28' as='section' >
       
        <Box 
        align='center'
        color='gray.50'
        bg='purple.600' 
        pt='90PX' 
        pb='198px'
        px='8px'
        textAlign={['left','left','center']} >
           <div> <Login/></div>
            <Heading fontWeight='extrabold' fontSize={['3xl','3xl','5xl']} px='8'>
           
           Simple pricing for your business
           
            </Heading>
           
            <Text fontSize='medium' fontWeight={['lg','lg','2xl']} px='8' pt='10px'>
                Plans that are carefully crafted to suit your business.</Text>
        </Box>
        </Box>
    </div>
  )
}

export default Header