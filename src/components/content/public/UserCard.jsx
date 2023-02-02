import {Button, Grid, Paper, Typography} from '@mui/material';
import {getDocs} from 'firebase/firestore';
import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useStepWizardContext} from '../../../contexts/StepWizardContext';
import RenderRating from './reviews/RenderRating';

const UserCard = props => {
   const {firstName, lastName, aboutMe, hourlyWage, uid} = props.user;

   const value = 5;

   const navigate = useNavigate();
   const {setWorkerObj} = useStepWizardContext();
   return (
      <Grid item xs={3}>
         <Paper elevation={3}>
            <Typography>
               {firstName} {lastName}
            </Typography>
            <Typography>
               <RenderRating uid={uid} value={value} />
            </Typography>
            <Typography>{aboutMe}</Typography>
            <Typography>{hourlyWage} сом за час</Typography>
            <Button
               variant="outlined"
               onClick={() => {
                  setWorkerObj(props.user);
                  navigate('/calendar');
               }}
            >
               Выбрать и продолжить
            </Button>
         </Paper>
      </Grid>
   );
};

export default UserCard;
