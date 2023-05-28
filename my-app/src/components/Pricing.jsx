import React from 'react'
import { Box,Button,Flex,Heading,Text,ListItem,List } from '@chakra-ui/react'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import Icons from '../icon/Icons';


function Pricing() {
  return (
    <div>
        <Box 
        maxW='994px' 
        margin='auto' 
        mt='-256px'
        borderRadius='12px' 
        overflow='hidden'
        boxShadow=' 2px 2px 2px 1px rgba(0, 0, 0, 0.2);'>
          <Flex>
            <Box p='60px' align='center' bg='#e8eaf6'>
                <Text fontSize='24px' fontWeight='800'>
                    Premium Pro
                </Text>
                <Heading as='h3'fontSize='60px' mt='16px'>
                    $300
                </Heading>
                <Text color='#171923' fontSize='18px' fontWeight='500' mt='8px'>
                    billed just once
                </Text>
                <Button colorScheme='purple' size='lg' w='282px' mt='24px'>Get Started</Button>
            </Box>

            <Box  bg='white' p='60px'>
               <Text textAlign='left'>
                    Access these features when you get this pricing package for your business.
               </Text>
               <List spacing='20px' as='ul'mt='24px'>
                    <ListItem><AccessTimeFilledIcon sx={{color:'#80cbc4' ,mb:'-7px'}} /> International and colling API</ListItem>
                    <ListItem><AccessTimeFilledIcon  sx={{color:'#80cbc4' ,mb:'-7px'}}/>International and colling API</ListItem>
                    <ListItem><AccessTimeFilledIcon  sx={{color:'#80cbc4' ,mb:'-7px'}}/>International and colling API</ListItem>
                    <ListItem><AccessTimeFilledIcon  sx={{color:'#80cbc4' ,mb:'-7px'}}/>International and colling API</ListItem>
               </List >        
            </Box>
          </Flex>
        </Box>
        <Icons/>
    </div>
  )
}

export default Pricing