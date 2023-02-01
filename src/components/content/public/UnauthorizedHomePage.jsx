import {FormControl, InputLabel, MenuItem, Select} from '@mui/material';
import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useGlobalContext} from '../../../contexts/GlobalContextProvider';

const UnauthorizedHomePage = () => {
   const navigate = useNavigate();
   const {
      servicesArr,
      categoriesArr,
      category,
      setCategory,
      getCategoriesServices,
      getServices,
   } = useGlobalContext();

   useEffect(() => {
      getCategoriesServices();
      getServices();
      // categoriesArr.map(item => {
      //    console.log(item);
      // });
   }, []);

   // useEffect(() => {
   //    if (categoriesArr.length) {
   //       console.log(categoriesArr, 'data');
   //    }
   //    console.log(categoriesArr, 'data2');
   // }, [categoriesArr]);

   return (
      <div>
         <h1>Добро пожаловать, дорогой гость</h1>

         <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
               Какими услугами вы хотели бы сегодня воспользоваться?
            </InputLabel>
            <Select
               labelId="demo-simple-select-label"
               id="demo-simple-select"
               value={category}
               label="Категория услуг"
               onChange={e => {
                  setCategory(e.target.value);
                  navigate('/task-options');
               }}
            >
               {categoriesArr.map(category => {
                  console.log(category);
                  return (
                     <MenuItem value={category.id}>{category.title}</MenuItem>
                  );
               })}
            </Select>
         </FormControl>
      </div>
   );
};

export default UnauthorizedHomePage;
