import {
   Box,
   Button,
   FormControl,
   Rating,
   TextField,
   Typography,
} from '@mui/material';
import React, {useState} from 'react';
import {useGlobalContext} from '../../../../contexts/GlobalContextProvider';
import CloseIcon from '@mui/icons-material/Close';
import {addDoc, collection} from 'firebase/firestore';
import {db} from '../../../../helpers/firebase';

const ReviewModal = props => {
   const {setAddReviewModal, addReviewModal, author, workerUid} = props;
   const [value, setValue] = useState(2);
   const [reviewInp, setReviewInp] = useState('');
   const {userDetails} = useGlobalContext();

   async function addReview() {
      const reviewObj = {
         rating: value,
         review: reviewInp,
         author: `${userDetails.firstName} ${userDetails.lastName}`,
      };
      const docRef = await addDoc(
         collection(db, 'userData', workerUid, 'reviews'),
         reviewObj
      );
      console.log('Task added with  ID: ', docRef.id);
      setAddReviewModal(false);
   }
   return (
      <Box className="add-reivew__modal">
         <FormControl
            className="inner-modal"
            sx={{padding: '30px', width: '500px'}}
            fullWidth
         >
            <Box
               mb={4}
               sx={{
                  '& > legend': {mt: 2},
               }}
            >
               <Box
                  sx={{
                     display: 'flex',
                     justifyContent: 'space-between',
                     alignItems: 'center',
                  }}
               >
                  <Typography component="legend">Оценка</Typography>
                  <Button onClick={() => setAddReviewModal(false)}>
                     {' '}
                     <CloseIcon />
                  </Button>
               </Box>
               <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                     setValue(newValue);
                  }}
               />
            </Box>
            <Box mb="10px">
               <Typography mb="5px">Оставтьте отзыв</Typography>
               <TextField
                  fullWidth
                  id="outlined-multiline-static"
                  label="Ваш отзыв"
                  value={reviewInp}
                  multiline
                  rows={4}
                  defaultValue=""
                  onChange={e => setReviewInp(e.target.value)}
               />
            </Box>
            <Button onClick={e => addReview()}>Добавить отзыв</Button>
         </FormControl>
      </Box>
   );
};

export default ReviewModal;
