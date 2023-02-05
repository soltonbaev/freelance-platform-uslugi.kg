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
import ServicePicker from './ServicePicker';
import bgImg from './bishkek-city.jpg';

const UnauthorizedHomePage = () => {
   const navigate = useNavigate();
   const {
      categoriesArr,
      category,
      setCategory,
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
         <Box
            sx={{
               // backgroundImage:
               //    ' url(https://placepic.ru/wp-content/uploads/2018/10/bfc11ec1075aa8714a8dfc780382e413.jpg)',
               backgroundImage: `url(${bgImg})`,

               backgroundRepeat: 'no-repeat',
               backgroundPosition: 'center',
               backgroundAttachment: 'fixed',
               mozBackgroundSize: 'cover',
               backgroundSize: 'cover',
               webkitBackgroundSize: 'cover',
               backgroundColor: 'black',
               height: '70vh',
               //  margin: "1rem",
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               flexDirection: 'column',
            }}
         >
            <h1 style={{textAlign: 'center', color: 'white'}}>
               Добро пожаловать
            </h1>
            <ServicePicker />
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
                  return (
                     <WorkerCard
                        key={item.uid}
                        lastName={item.lastName}
                        firstName={item.firstName}
                        specialization={item.specialization}
                        price={item.hourlyWage}
                        image={item.photoUrl}
                        uid={item.uid}
                        category={item.category}
                        aboutMe={item.aboutMe}
                        tasksCompleted={item.tasksCompleted}
                     />
                  );
               })}
            </Box>
         </Box>
      </Box>
   );
};

export default UnauthorizedHomePage;
