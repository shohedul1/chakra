import { Stack, ListItem,List,Box } from '@chakra-ui/react';
import React from 'react';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import StarsIcon from '@mui/icons-material/Stars';


function Icons() {
  return (
    <div>

    
<Box m='20'as='section'  alignItems={['left','left','center']} >
     
            <List >

              <Stack direction={['column','column','row']} spacing='10px'  margin='auto' >

                    <ListItem  fontSize='20px' fontWeight='700'><StarsIcon sx={{mb:'-6px',color:'lightGreen'}}/>30 days money back Guarantee</ListItem>
                    <ListItem  fontSize='20px' fontWeight='700'><LocalActivityIcon  sx={{mb:'-6px',color:'#00e676'}}/>No setup fees 100% hassle-free</ListItem>
                    <ListItem  fontSize='20px' fontWeight='700'><AdsClickIcon  sx={{mb:'-6px',color:'orange'}}/>No monthly subscription Pay once and for all</ListItem>
              </Stack>
            </List>

            </Box>
       
    </div>
  )
}

export default Icons