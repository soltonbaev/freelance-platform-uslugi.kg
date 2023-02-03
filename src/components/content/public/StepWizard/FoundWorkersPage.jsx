import {Container, Grid, Paper} from '@mui/material';
import React, {useEffect} from 'react';
import {useGlobalContext} from '../../../../contexts/GlobalContextProvider';
import {useStepWizardContext} from '../../../../contexts/StepWizardContext';
import UserCard from '../UserCard';

const FoundWorkersPage = () => {
   const {usersByQuery, getUsersByQuery} = useGlobalContext();
   const {city, setIsWizardInProgress} = useStepWizardContext();
   useEffect(() => {
      getUsersByQuery(true, city);
      setIsWizardInProgress(true);
   }, []);

   return (
      <Container maxWidth="md">
         <Paper
            elevation={5}
            sx={{minHeight: '50vh', padding: '1rem', margin: '1rem'}}
         >
            <h1>Шаг 2 - Выберите помощника</h1>
            {usersByQuery.map(user => {
               console.log('foundWorkers', user);
               return <UserCard user={user} />;
            })}
         </Paper>
      </Container>
   );
};

export default FoundWorkersPage;
