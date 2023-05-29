import { Box, Button, FormControl, Heading, Input } from '@chakra-ui/react'
import React, { useState } from 'react'

function Login() {
    const [opent,setOpent] = React.useState(false);
    const handleChange=()=>{
        setOpent(true)
    };
    const handleChange1=()=>{
        setOpent(false)
    };
   
  return (
    <div>
       
  
       <Button onClick={handleChange} bg='#ab47bc'm='30px'>Buy Now</Button>
  
       
        <dialog open={opent}>

        <Box  bg='red.200' p='30px' margin='auto' maxW='400px'  borderRadius={20}>
        <Heading textAlign={['left','left','center']}>
            lo<span style={{color:'#00e676'}}>Gin</span>
        </Heading>
        <label textAlign='left'>Enter your name:</label>
        <Input aria-label='name' placeholder='Enter your name' type='name'/>
        <label>Enter your password:</label>
        <Input aria-label='password' placeholder='Enter your password' type='password'/>
        <label>Enter your email:</label>
        <Input aria-label='email' placeholder='Enter your email' type='email'/>
        <Button mt='5px' onClick={handleChange1} bg='#ffeb3b'>Submit</Button>
        </Box>
        </dialog>
    
    </div>
  )
}

export default Login