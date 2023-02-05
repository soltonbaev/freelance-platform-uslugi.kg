import {
   Box,
   Card,
   CardContent,
   CardMedia,
   Typography,
   useRadioGroup,
} from '@mui/material';
import React from 'react';
import RenderRating from './public/reviews/RenderRating';

const WorkerCard = props => {
   const {
      firstName,
      lastName,
      image,
      uid,
      specialization,
      price,
      aboutMe,
      category,
      tasksCompleted,
   } = props;

   return (
      <Card
         sx={{
            // minWidth: "30vw",
            // minWidth: { xs: "400px", lg: "30vw" },
            width: {xs: '400px', lg: '30vw'},
            height: 'fit-content',
            padding: '1rem 0.5rem',
            border: '1px solid rgb(29, 118, 226)',
            borderRadius: '10px',
            margin: '0.5rem',
         }}
      >
         <Box
            sx={{
               display: 'flex',
            }}
         >
            <CardMedia
               component="img"
               style={{
                  width: '120px',
                  height: '120px',
                  margin: '20px',
                  borderRadius: '50%',
               }}
               image={image}
            />
            <CardContent>
               <Typography
                  variant="h2"
                  sx={{
                     fontSize: {xs: '30px', lg: 'none'},
                  }}
               >
                  {firstName} {lastName}
               </Typography>
               <Typography variant="body2" sx={{marginTop: '0.5rem'}}>
                  <RenderRating uid={uid} />
               </Typography>
               <Typography variant="body2" sx={{marginTop: '0.5rem'}}>
                  Выполненных задач: {tasksCompleted}
               </Typography>
            </CardContent>
         </Box>
         <Box
            sx={{
               textAlign: 'center',
            }}
         >
            <Typography
               variant="body2"
               sx={{
                  marginTop: '0.5rem',
                  fontSize: '15px',
               }}
            >
               Специальность: {specialization}
            </Typography>

            <Typography
               variant="body2"
               sx={{
                  marginTop: '0.5rem',
                  fontWeight: 'normal',
                  fontSize: '20px',
               }}
            >
               Оплата за час: {price} сом
            </Typography>
         </Box>
         <Box
            sx={{
               textAlign: 'center',
            }}
         >
            <Typography
               variant="body2"
               sx={{
                  marginTop: '0.5rem',
                  fontWeight: 'normal',
                  // fontSize: '2px',
               }}
            >
               Обо мне: {aboutMe}
            </Typography>
         </Box>
      </Card>
   );
};

export default WorkerCard;
