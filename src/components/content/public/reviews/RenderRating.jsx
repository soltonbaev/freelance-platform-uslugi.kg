import {Rating} from '@mui/material';
import {collection, getDocs} from 'firebase/firestore';
import React, {useEffect} from 'react';
import {db} from '../../../../helpers/firebase';

const RenderRating = ({value, uid}) => {
   async function getRatings() {
      const arr = [];
      const querySnapshot = await getDocs(
         collection(db, 'userData', uid, 'reviews')
      );
      querySnapshot.forEach(doc => {
         arr.push(doc.data());
      });
      arr.forEach(review => {
         console.log(review.rating);
      });
   }

   useEffect(() => {
      getRatings();
   }, []);

   return (
      <>
         <Rating name="read-only" value={value} readOnly />
      </>
   );
};

export default RenderRating;
