import React, {useState} from 'react';
import {db} from '../../../../helpers/firebase';
import {addDoc, collection, serverTimestamp} from 'firebase/firestore';
import {useGlobalContext} from '../../../../contexts/GlobalContextProvider';
import { Container } from '@mui/system';
const SendMessage = ({scroll}) => {
   const [message, setMessage] = useState('');
   const {userDetails, taskUid} = useGlobalContext();
   const sendMessage = async event => {
      event.preventDefault();

      if (message.trim() === '') {
         alert('Enter valid message');
         return;
      }
      //  console.log('userDetails', userDetails);

      const {uid, displayName, photoUrl} = userDetails;
      console.log(message);
      console.log(uid);
      console.log(photoUrl);
      await addDoc(collection(db, 'tasks', taskUid, 'messages'), {
         text: message,
         name: displayName,
         avatar: photoUrl,
         createdAt: serverTimestamp(),
         uid,
      });
      setMessage('');
      scroll.current.scrollIntoView({behavior: 'smooth'});
   };
   return (
      <Container sx={{display: "flex", justifyContent: "center" }}>
      <form onSubmit={event => sendMessage(event)} className="send-message">
         <label htmlFor="messageInput" hidden>
            Enter Message
         </label>
         <input
            id="messageInput"
            name="messageInput"
            type="text"
            className="form-input__input"
            placeholder="type message..."
            value={message}
            onChange={e => setMessage(e.target.value)}
         />
         <button type="submit">Send</button>
      </form>

      </Container>
   );
};

export default SendMessage;
