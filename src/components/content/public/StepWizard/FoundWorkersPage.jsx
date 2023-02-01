import {Grid} from '@mui/material';
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
      <Grid
         container
         spacing={2}
         direction="column"
         alignItems="center"
         justifyContent="center"
         // style={{minHeight: '100vh'}}
      >
         <h1>Шаг 2 - Выберите помощника</h1>
         {usersByQuery.map(user => {
            console.log('foundWorkers', user);
            return <UserCard user={user} />;
         })}
      </Grid>
   );
};

export default FoundWorkersPage;
