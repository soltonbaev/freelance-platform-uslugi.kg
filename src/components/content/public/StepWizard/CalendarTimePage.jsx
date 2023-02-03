import React, {useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import {useStepWizardContext} from '../../../../contexts/StepWizardContext';
import {useNavigate} from 'react-router-dom';
import {Button, Card, Grid, Paper} from '@mui/material';
import {useGlobalContext} from '../../../../contexts/GlobalContextProvider';
import {Container} from '@mui/system';

const CalendarTimePage = () => {
   const navigate = useNavigate();
   const {user} = useGlobalContext();
   const {setTime, setIsWizardInProgress} = useStepWizardContext();
   useEffect(() => {
      setIsWizardInProgress(true);
   }, []);
   return (
      <Container maxWidth="md">
         <Paper
            elevation={5}
            sx={{height: '50vh', padding: '1rem', margin: '2rem'}}
         >
            <h1>Шаг 3 - Выберите дату и время</h1>
            <Stack
               sx={{marginBottom: '1rem'}}
               component="form"
               noValidate
               spacing={3}
            >
               <TextField
                  onChange={e => {
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
               variant="contained"
               onClick={() => {
                  user ? navigate('/confirm') : navigate('/auth');
               }}
            >
               Выбрать дату и продолжить
            </Button>
         </Paper>
      </Container>
   );
};

export default CalendarTimePage;
