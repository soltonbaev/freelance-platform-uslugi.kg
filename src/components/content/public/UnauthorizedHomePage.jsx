import {FormControl, InputLabel, MenuItem, Select} from '@mui/material';
import React from 'react';
import {useGlobalContext} from '../../../contexts/GlobalContextProvider';

const UnauthorizedHomePage = () => {
   const {servicesArr, categoriesArr} = useGlobalContext();

   console.log();
   return (
      <div>
         <h1>Добро пожаловать, дорогой гость</h1>
         <ul>
            {categoriesArr.map(category => {
               console.log('catArr', category.title);
               return <li>{category.title}</li>;
            })}
         </ul>

         {/* <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
               Какими услугами вы хотели бы сегодня воспользоваться?
            </InputLabel>
            <Select
               labelId="demo-simple-select-label"
               id="demo-simple-select"
               value="category"
               label="Категория услуг"
               onChange={e => {
                  setCategory(e.target.value);
               }}
            >
               {catArr.map(category => {
                  console.log(category.title);
                  return (
                     <MenuItem value={category.id}>{category.title}</MenuItem>
                  );
               })}
            </Select>
         </FormControl> */}
      </div>
   );
};

export default UnauthorizedHomePage;
