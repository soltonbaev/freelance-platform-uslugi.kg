import {Button, Grid, Paper, Typography} from '@mui/material';
import {Container} from '@mui/system';
import React from 'react';
import {Navigate, useNavigate} from 'react-router-dom';
import {useStepWizardContext} from '../../../contexts/StepWizardContext';

const UserCard = props => {
   const {firstName, lastName, aboutMe, hourlyWage, uid} = props.user;
   const navigate = useNavigate();
   const {workerObj, setWorkerObj} = useStepWizardContext();
   return (
      <Grid item xs={3}>
         <Paper elevation={3}>
            <Typography>
               {firstName} {lastName}
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
