import {
   Button,
   Container,
   Grid,
   Paper,
   TextareaAutosize,
   Typography,
} from '@mui/material';
import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useGlobalContext} from '../../../../contexts/GlobalContextProvider';
import {useStepWizardContext} from '../../../../contexts/StepWizardContext';
const ConfirmationPage = () => {
   const {category} = useGlobalContext();
   const {
      time,
      taskLength,
      workerObj,
      taskDesc,
      setTaskDesc,
      createTask,
   } = useStepWizardContext();
   return (
      <Container maxWidth="md" sx={{mb: "50px"}}>
         <Paper
            elevation={5}
            sx={{minHeight: '50vh', padding: '20px', minWidht: "70vw"}}
         >
            <Grid
               container
               spacing={2}
               direction="column"
               alignItems="center"
               justifyContent="center"
               
            >
               <h1>Шаг 4 - Подтвердите оформление услуги </h1>
               <Grid
                  spacing={5}
                  container
                  alignItems="center"
                  justifyContent="center"
                  mb="20px"
                  columns={{ xs: 2, sm: 6 }}
               >
                  <Grid item>
                     <Paper elevation={4} sx={{padding: "20px"}}>
                        <Typography>Проверьте описание задачи</Typography>
                        <TextareaAutosize
                           aria-label="minimum height"
                           minRows={3}
                           defaultValue={taskDesc}
                           style={{width: '100%'}}
                           onChange={e => {
                              setTaskDesc(e.target.value);
                           }}
                        />
                        <Typography>
                           Введите номер банковской карты для оплаты
                        </Typography>
                     </Paper>
                  </Grid>
                  <Grid item>
                     <Paper elevation={4} sx={{padding: "20px"}}>
                        <Typography></Typography>
                        {category}

                        <Typography>{workerObj.firstName}</Typography>

                        <Typography>{time}</Typography>
                        <Typography>{taskLength}</Typography>
                        <Typography>
                           Почасовая оплате: {workerObj.hourlyWage} сом / час
                        </Typography>
                        <Typography>
                           Издержки платформы: 15% от почасовой оплаты
                        </Typography>
                        <Typography>
                           Итого:{' '}
                           {parseInt(workerObj.hourlyWage) +
                              parseInt(workerObj.hourlyWage) * 0.15}
                           сом / час
                        </Typography>
                     </Paper>
                  </Grid>
               </Grid>
               <Button
                  variant="outlined"
                  
                  onClick={() => {
                     createTask();
                  }}
               >
                  Подтвердить и связаться с помощником
               </Button>
            </Grid>
         </Paper>
      </Container>
   );
};

export default ConfirmationPage;