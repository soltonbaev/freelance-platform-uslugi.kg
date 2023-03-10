import React, {useEffect, useRef, useState} from 'react';
import {
   query,
   collection,
   orderBy,
   onSnapshot,
   limit,
} from 'firebase/firestore';
import './ChatBox.css';
import {db} from '../../../../helpers/firebase';
import Message from './Message';
import SendMessage from './SendMessage';
import {useGlobalContext} from '../../../../contexts/GlobalContextProvider';
import { Container } from '@mui/system';
import ChatHeader from "./ChatHeader"

const ChatBox = () => {
   const [messages, setMessages] = useState([]);
   const scroll = useRef();
   const {taskUid, setIsChatActive} = useGlobalContext();

   useEffect(() => {
      setIsChatActive(true);
      console.log('taskUid', taskUid);
      const q = query(
         collection(db, 'tasks', taskUid, 'messages'),
         orderBy('createdAt'),
         limit(50)
      );

      const unsubscribe = onSnapshot(q, QuerySnapshot => {
         let messages = [];
         QuerySnapshot.forEach(doc => {
            messages.push({...doc.data(), id: doc.id});
         });
         setMessages(messages);
      });
      return () => unsubscribe;
   }, []);

   return (
      <Container >
      <main className="chat-box">
         <ChatHeader/>
         <div className="messages-wrapper">
            {messages.map(message => (
               <Message key={message.id} message={message} />
            ))}
         </div>
         {/* when a new message enters the chat, the screen scrolls dowwn to the scroll div */}
         <span ref={scroll}></span>
         <SendMessage scroll={scroll} />
      </main>

      </Container>
   );
};

export default ChatBox;
