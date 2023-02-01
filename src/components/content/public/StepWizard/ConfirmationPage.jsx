import {Button, Grid, Paper, TextareaAutosize, Typography} from '@mui/material';
import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useGlobalContext} from '../../../../contexts/GlobalContextProvider';
import {useStepWizardContext} from '../../../../contexts/StepWizardContext';
const ConfirmationPage = () => {
   const navigate = useNavigate();
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
      <Grid
         container
         spacing={2}
         direction="column"
         alignItems="center"
         justifyContent="center"
      >
         <h1>Шаг 4 - Подтвердите оформление услуги </h1>
         <Grid
            spacing={2}
            container
            alignItems="center"
            justifyContent="center"
         >
            <Grid item>
               <Paper elevation={4}>
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
               <Paper elevation={4}>
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
               navigate('/chat');
            }}
         >
            Подтвердить и связаться с помощником
         </Button>
      </Grid>
   );
};

export default ConfirmationPage;
