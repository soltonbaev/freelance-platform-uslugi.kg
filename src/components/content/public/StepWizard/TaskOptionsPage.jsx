import {
   Box,
   Button,
   FormControl,
   InputLabel,
   MenuItem,
   Paper,
   Select,
   TextareaAutosize,
} from '@mui/material';
import {Container} from '@mui/system';
import React, {useEffect} from 'react';
import {Navigate, useNavigate} from 'react-router-dom';
import {useGlobalContext} from '../../../../contexts/GlobalContextProvider';
import {useStepWizardContext} from '../../../../contexts/StepWizardContext';

const TaskOptionsPage = () => {
   const navigate = useNavigate();
   const {cities} = useGlobalContext();
   const {
      city,
      setCity,
      setTaskLength,
      setTaskDesc,
      setIsWizardInProgress,
   } = useStepWizardContext();

   useEffect(() => {
      setIsWizardInProgress(true);
   }, []);
   return (
      <Container maxWidth="md">
         <Paper
            elevation={5}
            sx={{minHeight: '50vh', padding: '1rem', margin: '2rem'}}
         >
            <h1>Шаг 1 - введите детали заказа</h1>

            <FormControl sx={{width: '100%'}}>
               <InputLabel id="demo-simple-select-label">
                  Где вы проживаете?
               </InputLabel>
               <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={city}
                  label="Город"
                  onChange={e => {
                     setCity(e.target.value);
                  }}
               >
                  {cities.map(city => {
                     return <MenuItem value={city}>{city}</MenuItem>;
                  })}
               </Select>
            </FormControl>
            <Box mb={3}>
               <h2> Насколько большая помощь вам требуется?</h2>
               <div
                  className="inputs"
                  onClick={e => {
                     setTaskLength(e.target.value);
                  }}
               >
                  <input value="small" type="radio" name="task-duration" />
                  <label for="small">Маленькая - 1 час</label>
                  <input value="medium" type="radio" name="task-duration" />
                  <label for="small">Средняя - 2-3 часa</label>
                  <input value="large" type="radio" name="task-duration" />
                  <label for="small">Большая - 4 часa и больше</label>
               </div>
            </Box>
            <TextareaAutosize
               aria-label="minimum height"
               minRows={3}
               placeholder="Опишите вашу задачу. Пожалуйста уточните детали задачи, например размер вашего помещения, какие инструменты нужны для выполнения задачи итд "
               style={{width: '100%', resize: 'none', marginBottom: '1rem'}}
               onChange={e => {
                  setTaskDesc(e.target.value);
               }}
            />
            <Button
               variant="contained"
               onClick={() => {
                  navigate('/workers');
               }}
            >
               Continue
            </Button>
         </Paper>
      </Container>
   );
};

export default TaskOptionsPage;
