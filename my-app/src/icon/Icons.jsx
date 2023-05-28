import { Stack, ListItem,List,Box } from '@chakra-ui/react';
import React from 'react';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import StarsIcon from '@mui/icons-material/Stars';


function Icons() {
  return (
    <div>

    
<Box  bg='white' p='40px'>
     
            <List>

              <Stack direction='row' spacing='110px'  margin='auto' ml='180px'>

                    <ListItem fontSize='20px' fontWeight='700'><StarsIcon sx={{mb:'-6px',color:'lightGreen',ml:'-23px'}}/>30 days money back <br /> Guarantee</ListItem>
                    <ListItem  fontSize='20px' fontWeight='700'><LocalActivityIcon  sx={{mb:'-6px',color:'#00e676',ml:'-23px'}}/>No setup fees 100% <br /> hassle-free</ListItem>
                    <ListItem  fontSize='20px' fontWeight='700'><AdsClickIcon  sx={{mb:'-6px',color:'orange',ml:'-23px'}}/>No monthly subscription Pay <br /> once and for all</ListItem>
              </Stack>
            </List>

            </Box>
       
    </div>
  )
}

export default Icons