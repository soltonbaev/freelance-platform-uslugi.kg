import {
   Box,
   Button,
   Container,
   Divider,
   FormControl,
   InputLabel,
   MenuItem,
   Select,
   Typography,
} from '@mui/material';
import React, {useEffect} from 'react';
import {Stack} from '@mui/system';
import {useStepWizardContext} from '../../../contexts/StepWizardContext';
import {useGlobalContext} from '../../../contexts/GlobalContextProvider';
import {useNavigate} from 'react-router-dom';

const BecomeWorker = () => {
   const navigate = useNavigate();
   const {city, setCity} = useStepWizardContext();
   const {
      category,
      setCategory,
      cities,
      categoriesArr,
      getCategoriesServices,
   } = useGlobalContext();

   useEffect(() => {
      getCategoriesServices();
   }, []);

   return (
      <div>
         <Box className="bgImage">
            <Container>
               <Box
                  sx={{
                     height: '400px',
                     display: 'flex',
                     flexDirection: 'column',
                     alignItems: 'end',
                     justifyContent: 'center',
                  }}
               >
                  <Box
                     width={500}
                     sx={{
                        height: '90%',
                        padding: '20px',
                        background: '#ffffff',
                     }}
                  >
                     <Typography
                        color="black"
                        variant="h4"
                        sx={{mb: '20px', fontWeight: 'bold'}}
                     >
                        Найди работу легко и просто!
                     </Typography>
                     <Typography color="black" variant="h6">
                        Посмотри сколько зарабатывают в среднем на нашем сайте
                     </Typography>
                     <Divider sx={{background: 'white', mb: '10px'}} />
                     {/* ==== */}
                     <Box
                        sx={{
                           display: 'flex',
                           justifyContent: 'space-between',
                           alignItems: 'center',
                        }}
                     >
                        <Stack spacing={2}>
                           <FormControl fullWidth>
                              <InputLabel id="demo-simple-select-label">
                                 Выбрать город
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
                                    return (
                                       <MenuItem value={city}>{city}</MenuItem>
                                    );
                                 })}
                              </Select>
                           </FormControl>
                           <FormControl fullWidth>
                              <InputLabel id="demo-simple-select-label">
                                 Выбрать категорию
                              </InputLabel>
                              <Select
                                 labelId="demo-simple-select-label"
                                 id="demo-simple-select"
                                 value={category}
                                 label="Категория"
                                 onChange={e => {
                                    setCategory(e.target.value);
                                 }}
                              >
                                 {categoriesArr.map(category => {
                                    return (
                                       <MenuItem value={category.id}>
                                          {category.title}
                                       </MenuItem>
                                    );
                                 })}
                              </Select>
                           </FormControl>
                        </Stack>
                        <Box
                           sx={{
                              textAlign: 'center',
                              display: 'flex',
                              justifyContent: 'center',
                              flexDirection: 'column',
                              margin: '0 auto',
                           }}
                        >
                           <Typography variant="h4">200 сом</Typography>
                           <Typography variant="h5">в час</Typography>
                        </Box>
                     </Box>
                     {/* ==== */}
                     <Divider
                        sx={{background: 'white', mb: '10px', mt: '10px'}}
                     />
                     <Button
                        onClick={() => {
                           navigate('/auth');
                        }}
                        sx={{width: '100%'}}
                        variant="contained"
                        color="success"
                     >
                        Начать работать
                     </Button>
                  </Box>
               </Box>
            </Container>
         </Box>
         <Container>as;dm</Container>
      </div>
   );
};

export default BecomeWorker;

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const category = [
   {label: 'Клининг'},
   {label: 'Садовые работы'},
   {label: 'Сборка мебели'},
   {label: 'Помощь с переездом'},
];
