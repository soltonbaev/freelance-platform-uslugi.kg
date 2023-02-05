import {
   Accordion,
   AccordionDetails,
   AccordionSummary,
   Box,
   Button,
   ButtonGroup,
   Divider,
   Grid,
   IconButton,
   Stack,
   Typography,
} from '@mui/material';
import {Container} from '@mui/system';
import React from 'react';
import {Link, NavLink, useNavigate} from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import appStoreLogo from '../Footer/app-store.png';
import playMarketLogo from '../Footer/google-play.png';
import {ExpandMore} from '@mui/icons-material';
import siteLogo from './logo.png';
import {useGlobalContext} from '../../contexts/GlobalContextProvider';

const Footer = () => {
   const {user, isUserWorker} = useGlobalContext();
   const footerInfo = [
      {
         title: 'Страницы',
         id: 1,
         footerContent: [
            {
               name: 'Все сервисы',
               link: '/categories-page',
               id: 1,
            },
            {
               name: 'О работе с нами',
               link: '/become-worker',
               id: 2,
            },{
               name: 'Локации',
               link: '/location',
               id: 3,
            },
         ],
      },
      {
         title: 'Помощь',
         id: 2,
         footerContent: [
            {
               name: 'О нас',
               link: '#',
               id: 1,
            },
            {
               name: 'Блог',
               link: '#',
               id: 2,
            },
            {
               name: 'Центр помощи',
               link: '#',
               id: 3,
            },
            {
               name: 'Обратная связь',
               link: '#',
               id: 4,
            },
         ],
      },
      {
         title: 'Политика сайта',
         id: 3,
         footerContent: [
            {
               name: 'Политика cookie',
               link: '#',
               id: 1,
            },
            {
               name: 'Политика конфиденциальности',
               link: '#',
               id: 2,
            },
            {
               name: 'Условия использования',
               link: '#',
               id: 3,
            },
         ],
      },
   ];

   return (
      <div>
         <Box
            sx={{
               background: 'linear-gradient(45deg,  #1d76e2, #3f00c9);',
               minHeight: '250px',
            }}
         >
            <Container>
               <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'block'}}}>
                  <Box
                     sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        pt: '30px',
                     }}
                  >
                     <Grid container sx={{width: '200px'}}>
                        <Typography color="white" variant="h6">
                           <img src={siteLogo} width={200} />
                        </Typography>
                        <Grid>
                           {user && isUserWorker ? (
                              <Box
                                 sx={{
                                    borderStyle: 'solid',
                                    borderColor: 'white',
                                    color: 'white',
                                    borderRadius: '8px',
                                    padding: '30px 15px',
                                 }}
                              >
                                 Режим помощника
                              </Box>
                           ) : user ? (
                              <Box
                                 sx={{
                                    borderStyle: 'solid',
                                    borderColor: 'white',
                                    color: 'white',
                                    borderRadius: '8px',
                                    padding: '30px 15px',
                                 }}
                              >
                                 Режим клиента
                              </Box>
                           ) : (
                              <NavLink to="/auth">
                                 <Button
                                    sx={{
                                       color: 'white',
                                       borderColor: 'white',
                                    }}
                                    variant="outlined"
                                    href="#"
                                    size="large"
                                 >
                                    ВХОД
                                 </Button>
                              </NavLink>
                           )}
                        </Grid>
                     </Grid>
                     {footerInfo.map(item => (
                        <Grid key={item.id} sx={{width: '200px'}}>
                           <Typography variant="h6" color="white">
                              {item.title}
                           </Typography>
                           {item.footerContent.map(page => (
                              <NavLink
                                 key={page.id}
                                 to={page.link}
                                 style={{textDecoration: 'none'}}
                              >
                                 <Typography
                                    variant="body2"
                                    sx={{
                                       ml: 'auto',
                                       my: 1,
                                       color: '#ffffff8c',
                                       display: 'block',
                                       mb: '5px',
                                    }}
                                 >
                                    {page.name}
                                 </Typography>
                              </NavLink>
                           ))}
                        </Grid>
                     ))}
                     <Grid sx={{width: '200px'}}>
                        <Stack direction="column" spacing={2}>
                           <Typography variant="h6" color="white">
                              Скачать приложение
                           </Typography>
                           <NavLink to="#">
                              <img
                                 id="logo"
                                 src={playMarketLogo}
                                 alt=""
                                 style={{width: '150px'}}
                              />
                           </NavLink>
                           <NavLink to="#">
                              <img
                                 id="logo"
                                 src={appStoreLogo}
                                 alt=""
                                 style={{width: '150px'}}
                              />
                           </NavLink>
                        </Stack>
                     </Grid>
                  </Box>
                  <Divider sx={{mt: '10px', backgroundColor: 'white'}} />
                  <Box
                     sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                     }}
                  >
                     <Typography color="#ffffff8c">
                        © 2023 - Создано Тимой, Эрнасом и Ибраимом
                     </Typography>
                     <ButtonGroup>
                        <NavLink to="#">
                           <IconButton sx={{color: '#ffffff8c'}}>
                              <InstagramIcon />
                           </IconButton>
                        </NavLink>
                        <NavLink to="#">
                           <IconButton sx={{color: '#ffffff8c'}}>
                              <FacebookIcon />
                           </IconButton>
                        </NavLink>
                     </ButtonGroup>
                  </Box>
               </Box>
               {/* =============================================================================================== */}
               <Box sx={{flexGrow: 1, display: {sm: 'block', md: 'none'}}}>
                  <Box
                     sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        pt: '20px',
                        mb: '20px',
                     }}
                  >
                     <Typography color="white" variant="h6">
                        <img src={siteLogo} width={150} />
                     </Typography>
                     <NavLink to="/auth">
                        <Button
                           sx={{color: 'white', backgroundColor: 'black'}}
                           variant="outlined"
                           href="#"
                           size="large"
                        >
                           ВХОД
                        </Button>
                     </NavLink>
                  </Box>
                  {footerInfo.map(item => (
                     <Accordion
                        key={item.id}
                        sx={{
                           background: '#33485d',
                           border: '1px solid rgba(255, 255, 255, 0.8)',
                        }}
                     >
                        <AccordionSummary
                           expandIcon={<ExpandMore />}
                           aria-controls="panel1a-content"
                           id="panel1a-header"
                        >
                           <Typography sx={{color: 'white'}}>
                              {item.title}
                           </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                           <Grid sx={{width: '100%'}}>
                              {item.footerContent.map(page => (
                                 <NavLink key={page.id} to={page.link}>
                                    <Typography
                                       variant="body2"
                                       sx={{
                                          ml: '0',
                                          my: 1,
                                          color: 'white',
                                          display: 'block',
                                          mb: '5px',
                                       }}
                                    >
                                       {page.name}
                                    </Typography>
                                 </NavLink>
                              ))}
                           </Grid>
                        </AccordionDetails>
                     </Accordion>
                  ))}
                  <Grid sx={{mt: '20px', mb: '20px'}}>
                     <Typography variant="h6" color="white">
                        Скачать приложение
                     </Typography>

                     <Stack
                        direction="row"
                        spacing={4}
                        sx={{display: 'flex', alignItems: 'center'}}
                     >
                        <Grid>
                           <Link to="#">
                              <img
                                 id="logo"
                                 src={playMarketLogo}
                                 alt=""
                                 style={{width: '150px'}}
                              />
                           </Link>
                           <Link to="#">
                              <img
                                 id="logo"
                                 src={appStoreLogo}
                                 alt=""
                                 style={{width: '150px'}}
                              />
                           </Link>
                        </Grid>
                     </Stack>
                  </Grid>
                  <Divider sx={{mt: '10px', backgroundColor: 'black'}} />
                  <Box
                     sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                     }}
                  >
                     <Typography color="#ffffff8c">
                        © 2023 - Создано Тимой, Эрнасом и Ибраимом
                     </Typography>
                     <ButtonGroup>
                        <NavLink to="#">
                           <IconButton sx={{color: '#ffffff8c'}}>
                              <InstagramIcon />
                           </IconButton>
                        </NavLink>
                        <NavLink to="#">
                           <IconButton sx={{color: '#ffffff8c'}}>
                              <FacebookIcon />
                           </IconButton>
                        </NavLink>
                     </ButtonGroup>
                  </Box>
               </Box>
            </Container>
         </Box>
      </div>
   );
};

export default Footer;
