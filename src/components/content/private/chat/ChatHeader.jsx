import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useGlobalContext } from '../../../../contexts/GlobalContextProvider';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const ChatHeader = () => {
    const {chatWithUser, setIsChatActive} = useGlobalContext();
    const navigate = useNavigate()
    console.log("asd",chatWithUser);
    return (
        <Box sx={{ flexGrow: 1,  }}>
        <AppBar position="static" sx={{background: "#4c768d"}}>
          <Toolbar variant="dense">
            <Button onClick={() => {
                setIsChatActive(false);
                navigate("/my-tasks")
            }}>
                <ArrowBackIcon sx={{color: "white"}}/>
            </Button>
            <Typography variant="h6" color="inherit" component="div">
              {chatWithUser}
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    );
};

export default ChatHeader;