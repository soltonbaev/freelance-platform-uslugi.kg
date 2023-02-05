import {FormControl, InputLabel, MenuItem, Select} from '@mui/material';
import React from 'react';
import {useGlobalContext} from '../../../contexts/GlobalContextProvider';

const ServicePicker = () => {
   const {
      categoriesArr,
      category,
      setCategory,
      getCategoriesServices,
      service,
      setService,
      getServices,
   } = useGlobalContext();
   //    useEffect(() => {
   //       getCategoriesServices, getServices;
   //    }, []);
   return (
      <>
         <h2>Какими услугами вы хотели бы сегодня воспользоваться?</h2>
         <FormControl
            fullWidth
            style={{
               display: 'flex',
               margin: 'auto',
               width: '50vw',
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
                     <MenuItem value={category.id}>{category.title}</MenuItem>
                  );
               })}
            </Select>
         </FormControl>
         <FormControl
            fullWidth
            style={{
               display: 'flex',
               margin: 'auto',
               width: '50vw',
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
               value={category}
               label="Категория услуг"
               onChange={e => {
                  setCategory(e.target.value);
               }}
            >
               {categoriesArr.map(category => {
                  return (
                     <MenuItem value={category.id}>{category.title}</MenuItem>
                  );
               })}
            </Select>
         </FormControl>
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
