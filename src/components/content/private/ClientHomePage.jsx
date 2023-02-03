import {
   Container,
   FormControl,
   InputLabel,
   MenuItem,
   Paper,
   Select,
} from '@mui/material';
import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useGlobalContext} from '../../../contexts/GlobalContextProvider';

const ClientHomePage = () => {
   const navigate = useNavigate();
   const {
      user,
      userDetails,
      categoriesArr,
      category,
      setCategory,
      getCategoriesServices,
      getServices,
   } = useGlobalContext();

   useEffect(() => {
      getCategoriesServices();
      getServices();
   }, []);

   return (
      <Container maxWidth="md">
         <Paper
            elevation={5}
            sx={{minHeight: '50vh', padding: '1rem', margin: '1rem'}}
         >
            <h1>С возвращением, {userDetails.firstName}</h1>

            <FormControl sx={{width: '80%'}}>
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
                     return (
                        <MenuItem value={category.id}>
                           {category.title}
                        </MenuItem>
                     );
                  })}
               </Select>
            </FormControl>
         </Paper>
      </Container>
   );
};

export default ClientHomePage;
