import React, {useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import {useStepWizardContext} from '../../../../contexts/StepWizardContext';
import {Navigate, useNavigate} from 'react-router-dom';
import {Button, Card, Grid} from '@mui/material';
import {useGlobalContext} from '../../../../contexts/GlobalContextProvider';

const CalendarTimePage = () => {
   const navigate = useNavigate();
   const {user} = useGlobalContext();
   const {time, setTime, setIsWizardInProgress} = useStepWizardContext();
   useEffect(() => {
      setIsWizardInProgress(true);
   }, []);
   return (
      <Grid
         container
         spacing={2}
         direction="column"
         alignItems="center"
         justifyContent="center"
      >
         <h1>Шаг 3 - Выберите дату и время когда вам необходима помощь</h1>
         <Stack component="form" noValidate spacing={3}>
            <TextField
               onChange={e => {
                  // console.log(e.target.value);
                  setTime(e.target.value);
               }}
               id="datetime-local"
               label="Выберите Дату и Время"
               type="datetime-local"
               defaultValue="2017-05-24T10:30"
               sx={{width: 250}}
               InputLabelProps={{
                  shrink: true,
               }}
            />
         </Stack>
         <Button
            variant="outlined"
            onClick={() => {
               user ? navigate('/confirm') : navigate('/auth');
            }}
         >
            Выбрать дату и продолжить
         </Button>
      </Grid>
   );
};

export default CalendarTimePage;
