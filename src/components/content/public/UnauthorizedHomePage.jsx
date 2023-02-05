import {
   Box,
   Card,
   CardActionArea,
   CardContent,
   CardMedia,
   FormControl,
   InputLabel,
   MenuItem,
   Select,
   Typography,
} from '@mui/material';
import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useGlobalContext} from '../../../contexts/GlobalContextProvider';
import CheckIcon from '@mui/icons-material/Check';
import WorkerCard from '../WorkerCard';

const UnauthorizedHomePage = () => {
   const navigate = useNavigate();
   const {
      categoriesArr,
      category,
      setCategory,
      getCategoriesServices,
      getServices,
      getUsersByType,
      usersByType,
      setUsersByType,
   } = useGlobalContext();

   useEffect(() => {
      setCategory('');
      // getCategoriesServices();
      // getServices();
      getUsersByType(true);
   }, []);

   return (
      <Box>
         <h1 style={{textAlign: 'center'}}>Добро пожаловать</h1>
         <Box
            sx={{
               backgroundImage:
                  ' url(https://placepic.ru/wp-content/uploads/2018/10/bfc11ec1075aa8714a8dfc780382e413.jpg)',

               backgroundRepeat: 'no-repeat',
               backgroundPosition: 'center',
               backgroundAttachment: 'fixed',
               mozBackgroundSize: 'cover',
               oBackgroundSize: 'cover',
               backgroundSize: 'cover',
               webkitBackgroundSize: 'cover',
               backgroundColor: 'balck',
               height: '70vh',
               //  margin: "1rem",
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               flexDirection: 'column',
            }}
         >
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
         </Box>

         <Card
            sx={{
               width: '70vw',

               margin: '10px auto',

               border: '1px solid rgb(63, 0, 201)',

               borderRadius: '10px',
            }}
         >
            <CardActionArea
               sx={{display: 'flex', flexDirection: {md: 'row', xs: 'column'}}}
            >
               <CardMedia
                  component="img"
                  sx={{
                     width: {xs: '80%', md: '50%'},

                     margin: '1rem',
                     borderRzadius: '10px',
                  }}
                  image="https://eeca.unfpa.org/sites/default/files/styles/news_detail/public/news/Young-people-in-Bishkek.jpg?itok=pNEa8hMA"
               />
               <CardContent sx={{width: '60vw'}}>
                  <Typography
                     sx={{marginTop: '10px'}}
                     gutterBottom
                     variant="h5"
                     component="div"
                  >
                     Повседневная жизнь стала проще
                  </Typography>
                  <Typography
                     sx={{marginTop: '10px'}}
                     variant="body2"
                     color="text.secondary"
                  >
                     Когда жизнь становится занятой, вам не нужно справляться с
                     ней в одиночку. Верните время для того, что вы любите, не
                     нарушая банк.
                  </Typography>
                  <Typography
                     sx={{marginTop: '10px'}}
                     variant="body2"
                     color="text.secondary"
                  >
                     <CheckIcon /> Выберите свой Tasker по отзывам, навыкам и
                     цене
                  </Typography>
                  <Typography
                     sx={{marginTop: '10px'}}
                     variant="body2"
                     color="text.secondary"
                  >
                     <CheckIcon /> Планируйте, когда это работает для вас — уже
                     сегодня
                  </Typography>
                  <Typography
                     sx={{marginTop: '10px'}}
                     variant="body2"
                     color="text.secondary"
                  >
                     <CheckIcon /> Общайтесь, платите, давайте чаевые и
                     просматривайте все на одной платформе
                  </Typography>
               </CardContent>
            </CardActionArea>
         </Card>
         <Box
            //  justifyContent: "space-around",

            sx={{
               display: {xs: 'block', lg: 'flex'},
               justifyContent: {xs: 'none', lg: 'space-around'},
            }}
         >
            {/* //-------------------------------------------------------------------------------------------------------------------------------------------- */}
            <Box
               //  justifyContent: "space-around",

               sx={{
                  //   display: { xs: "block", lg: "flex" },
                  //   justifyContent: { xs: "none", lg: "space-around" },
                  //   flexWrap: { xs: "block", lg: "wrap" },
                  display: 'flex',
                  justifyContent: 'space-around',
                  flexWrap: 'wrap',
               }}
            >
               {usersByType.map(item => {
                  console.log('llll', item);
                  return (
                     <WorkerCard
                        lastName={item.lastName}
                        firstName={item.firstName}
                        skils={item.title}
                        price={item.hourlyWage}
                        image={item.photoUrl}
                        uid={item.uid}
                        category={item.category}
                        aboutMe={item.aboutMe}
                     />
                  );
               })}
            </Box>
         </Box>
      </Box>
   );
};

export default UnauthorizedHomePage;
