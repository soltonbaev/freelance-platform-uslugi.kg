import {
   Button,
   Card,
   CardActionArea,
   CardActions,
   CardContent,
   CardMedia,
   Divider,
   FormControl,
   Grid,
   InputLabel,
   List,
   MenuItem,
   Select,
   Typography,
} from '@mui/material';
import {Box, Container} from '@mui/system';
import React, {useEffect} from 'react';
import {NavLink, useNavigate, useParams} from 'react-router-dom';
import {useGlobalContext} from '../../../contexts/GlobalContextProvider';
import task from './css/images/task.jpg';
import choose from './css/images/choose.jpg';
import complete from './css/images/complete.jpg';
import becomeWorker from './css/becomeWorker.css';

const TaskPage = () => {
   const {
      categoriesArr,
      servicesArr,
      getServices,
      getCategoriesServices,
   } = useGlobalContext();

   const params = useParams();

   const navigate = useNavigate();

   // useEffect(() => {
   //   getCategoriesServices();
   //   getServices();
   // }, []);

   const service = servicesArr.filter(item => {
      if (item.title === params.id) return item;
   });

   const category = categoriesArr.filter(item => {
      if (item.id === service[0].category) return item;
   });

   console.log('as', service);
   return (
      <Box>
         {service.length ? (
            <>
               <Box
                  sx={{
                     // background: "black",
                     backgroundImage: `url(${service[0].imageUrl})`,

                     backgroundRepeat: 'no-repeat',
                     backgroundPosition: 'center',
                     backgroundAttachment: 'fixed',
                     webkitBackgroundSize: 'cover',
                     mozBackgroundSize: 'cover',
                     oBackgroundSize: 'cover',
                     backgroundSize: 'cover',
                     backgroundColor: 'balck',
                     height: '400px',
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'center',
                     flexDirection: 'column',
                  }}
               >
                  <Box
                     sx={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        backgroundColor: 'rgba(0,0,0,0.4)',
                     }}
                  >
                     <Typography
                        variant="h4"
                        sx={{
                           textAlign: 'center',
                           fontWeight: 'bold',
                           color: 'white',
                        }}
                     >
                        {service[0].title}
                     </Typography>
                     <Divider
                        width="50px"
                        sx={{mt: '10px', mb: '20px', background: 'white'}}
                     />
                     <Typography
                        variant="h5"
                        textAlign="center"
                        mb="20px"
                        color="white"
                     >
                        {service[0].desc}
                     </Typography>
                     <Button
                        onClick={() => {
                           navigate('/');
                        }}
                        color="success"
                        variant="contained"
                        disableElevation
                     >
                        Заказать услугу
                     </Button>
                  </Box>
               </Box>

               <Container sx={{mt: '50px', mb: '50px'}}>
                  {/* =============== */}

                  <List
                     className="nav-way"
                     sx={{
                        display: 'flex',
                        mb: '20px',
                        color: 'black',
                        flexDirection: {xs: 'column', sm: 'row'},
                     }}
                  >
                     <li>
                        <NavLink to="/" style={{color: 'black'}}>
                           Главная страница
                        </NavLink>
                     </li>
                     <li>
                        <NavLink to="/categories-page" style={{color: 'black'}}>
                           Все сервисы
                        </NavLink>
                     </li>
                     <li>
                        <NavLink
                           to={`/task-category/${category[0].id}`}
                           style={{color: 'black'}}
                        >
                           {category[0].title}
                        </NavLink>
                     </li>
                     <li>
                        <NavLink to="#" style={{color: 'black'}}>
                           {service[0].title}
                        </NavLink>
                     </li>
                  </List>
                  {/* ================ */}

                  <Typography
                     variant="h4"
                     sx={{fontWeight: 'bold', textAlign: 'center'}}
                  >
                     Как это работает
                  </Typography>
                  <Grid
                     container
                     spacing={{xs: 2, md: 6}}
                     columns={{sm: 2, md: 9}}
                  >
                     <Grid item xs={1} md={3}>
                        <Box
                           width="300px"
                           height="300px"
                           sx={{display: 'flex', alignItems: 'center'}}
                        >
                           <img src={task} style={{width: '100%'}} />
                        </Box>
                        <Typography variant="h5">
                           1. Опишите свою задачу
                        </Typography>
                        <Typography variant="h6">
                           Расскажите нам, что вам нужно сделать, когда и где
                           это работает для вас.
                        </Typography>
                     </Grid>
                     <Grid item xs={1} md={3}>
                        <img src={choose} width="300px" />
                        <Typography variant="h5">
                           2. Выберите работника
                        </Typography>
                        <Typography variant="h6">
                           Просмотрите доверенных работников по навыкам, отзывам
                           и цене. Поговорите с ними, чтобы подтвердить детали.
                        </Typography>
                     </Grid>
                     <Grid item xs={1} md={3}>
                        <img src={complete} width="300px" />
                        <Typography variant="h5">3. Сделай это!</Typography>
                        <Typography variant="h6">
                           Ваш работник прибывает и выполняет свою работу.
                           Оплачивайте безопасно и оставляйте отзывы прямо
                           здесь.
                        </Typography>
                     </Grid>
                  </Grid>
               </Container>
               <Box className="bgImage" sx={{mt: '50px', mb: '50px'}}>
                  <Container>
                     <Box
                        sx={{
                           minHeight: '400px',
                           display: 'flex',
                           flexDirection: 'column',
                           alignItems: 'end',
                           justifyContent: 'center',
                        }}
                     >
                        <Box
                           sx={{
                              height: '90%',
                              padding: '20px',
                              background: '#ffffff',
                              width: {xs: '80%', sm: '500px'},
                           }}
                        >
                           <Typography
                              color="black"
                              variant="h4"
                              sx={{mb: '20px', fontWeight: 'bold'}}
                           >
                              Закажи услугу прямо сейчас!
                           </Typography>
                           <Divider sx={{background: 'white', mb: '20px'}} />
                           <Button
                              onClick={() => {
                                 navigate('/');
                              }}
                              color="success"
                              variant="contained"
                              disableElevation
                           >
                              Заказать услугу
                           </Button>
                        </Box>
                     </Box>
                  </Container>
               </Box>
            </>
         ) : (
            'Загрузка...'
         )}
      </Box>
   );
};

export default TaskPage;
