import { Divider } from '@mui/material';
import React from 'react';
import {useGlobalContext} from '../../../../contexts/GlobalContextProvider';

const Message = ({message}) => {
   const {user} = useGlobalContext();

   console.log(message.avatar);
   return (
      <div className={`chat-bubble ${message.uid === user.uid ? 'right' : ''}`}>
         <img
            className="chat-bubble__left"
            src={message.avatar}
            alt="user avatar"
         />
         <div className="chat-bubble__right">
            <p className="user-name">{message.name}</p>
            <Divider sx={{background: "black"}} />
            <p className="user-message">{message.text}</p>
         </div>
      </div>
   );
};

export default Message;
