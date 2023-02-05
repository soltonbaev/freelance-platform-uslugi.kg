import {
   Button,
   FormControl,
   InputLabel,
   MenuItem,
   Select,
   Typography,
} from '@mui/material';
import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useGlobalContext} from '../../../contexts/GlobalContextProvider';
import {Console, ConsoleGroup, ConsoleGroupEnd} from '../../../helpers/console';

const ServicePicker = () => {
   const navigate = useNavigate();
   const {
      categoriesArr,
      category,
      setCategory,
      service,
      servicesArr,
      setService,
   } = useGlobalContext();

   useEffect(() => {
      ConsoleGroup('Spawning ServicePicker...');
      Console('Value of category state', category);
      if (!category) {
         setCategory('handyman');
         Console('updated category', true);
      }

      //   setCategory('handyman');
      return () => {
         ConsoleGroupEnd('Ending ServicePicker...');
      };
   }, []);

   return (
      <>
         {Console('Value of category state inside render', category)}
         <Typography
            sx={{
               fontSize: '2rem',
               color: 'white',
               backgroundColor: '#0000008a',
            }}
         >
            Какими услугами вы хотели бы сегодня воспользоваться?
         </Typography>

         <>
            <FormControl
               fullWidth
               style={{
                  display: 'flex',
                  margin: '1rem auto',
                  width: '300px',
                  background: 'linear-gradient(27deg,  #1d76e2, #3f00c9)',
                  borderRadius: '10px',
                  borderColor: 'blue',
                  borderBlockColor: 'blue',
               }}
            >
               <InputLabel
                  id="demo-simple-select-label"
                  sx={{
                     color: 'white',
                  }}
               >
                  Выберите категорию
               </InputLabel>
               <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  label="Категория услуг"
                  onChange={e => {
                     setCategory(e.target.value);
                  }}
               >
                  {categoriesArr.map(category => {
                     return (
                        <MenuItem key={category.id} value={category.id}>
                           {category.title}
                        </MenuItem>
                     );
                  })}
               </Select>
            </FormControl>
            {category && (
               <FormControl
                  fullWidth
                  style={{
                     display: 'flex',
                     margin: '1rem auto',
                     width: '300px',
                     background: 'linear-gradient(27deg,  #1d76e2, #3f00c9)',
                     borderRadius: '10px',
                     borderColor: 'blue',
                     borderBlockColor: 'blue',
                  }}
               >
                  <InputLabel
                     id="demo-simple-select-label"
                     sx={{
                        color: 'white',
                     }}
                  >
                     Выберите услугу
                  </InputLabel>

                  <Select
                     labelId="demo-simple-select-label"
                     id="demo-simple-select"
                     value={service}
                     label="Категория услуг"
                     onChange={e => {
                        setService(e.target.value);
                     }}
                  >
                     {servicesArr.map(service => {
                        if (service.category === category) {
                           return (
                              <MenuItem
                                 key={service.title}
                                 value={service.title}
                              >
                                 {service.title}
                              </MenuItem>
                           );
                        }
                     })}
                  </Select>
               </FormControl>
            )}
         </>

         <Button
            variant="contained"
            onClick={() => {
               navigate('/task-options');
            }}
         >
            Продолжить
         </Button>
      </>
   );
};

export default ServicePicker;
