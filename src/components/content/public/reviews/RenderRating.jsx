import {Rating} from '@mui/material';
import {collection, getDocs} from 'firebase/firestore';
import React, {useEffect, useState} from 'react';
import {db} from '../../../../helpers/firebase';

const RenderRating = ({value, uid}) => {
   const [averageRating, setAverageRating] = useState(0);
   async function getRatings() {
      const arr = [];
      const querySnapshot = await getDocs(
         collection(db, 'userData', uid, 'reviews')
      );
      querySnapshot.forEach(doc => {
         arr.push(doc.data());
      });
      let sum = 0;
      arr.forEach(review => {
         if (review.rating) {
            //  console.log(uid, review.rating);
            sum += review.rating;
         }
         //
      });
      if (sum > 0) {
         setAverageRating(sum / arr.length);
      }
      console.log('Average rating', averageRating);
   }

   useEffect(() => {
      getRatings();
   }, []);

   return (
      <>
         <Rating name="read-only" value={averageRating} readOnly />
      </>
   );
};

export default RenderRating;
