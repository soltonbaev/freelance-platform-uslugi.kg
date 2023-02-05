import {AppBar, Avatar, Box, Button, Toolbar, Typography} from '@mui/material';
import React from 'react';
import {useGlobalContext} from '../../../../contexts/GlobalContextProvider';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useNavigate} from 'react-router-dom';
import {Container} from '@mui/system';

const ChatHeader = () => {
   const {chatWithUser, setIsChatActive, isUserWorker} = useGlobalContext();
   const navigate = useNavigate();
   console.log('asd', chatWithUser);
   return (
      <Container>
         <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <AppBar
               position="fixed"
               sx={{
                  background: 'linear-gradient(27deg,  #1d76e2, #3f00c9)',
                  margin: 'auto',
                  width: '100vw',
                  padding: '10px 10px',
                  top: '0',
                  right: '0',
                  left: '0',
               }}
            >
               <Toolbar variant="dense">
                  <Button
                     onClick={() => {
                        setIsChatActive(false);
                        navigate('/my-tasks');
                     }}
                  >
                     <ArrowBackIcon sx={{color: 'white'}} />
                  </Button>
                  <Typography variant="h6" color="inherit" component="div">
                     На связи, {isUserWorker ? 'ваш клиент' : 'ваш помощник'}:{' '}
                     {chatWithUser.firstName} {chatWithUser.lastName}
                  </Typography>
                  <Avatar
                     alt="Avatar Url"
                     src={chatWithUser.photoUrl}
                     sx={{margin: '0 0.5rem', width: 50, height: 50}}
                  />
               </Toolbar>
            </AppBar>
         </Box>
      </Container>
   );
};

export default ChatHeader;
