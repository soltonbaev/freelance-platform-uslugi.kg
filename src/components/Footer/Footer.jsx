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
import siteLogo from './logo.jpg';

const Footer = () => {
   const footerInfo = [
      {
         title: 'Discover',
         id: 1,
         footerContent: [
            {
               name: 'All Services',
               link: '#',
               id: 1,
            },
            {
               name: 'Elite Taskers',
               link: '#',
               id: 2,
            },
         ],
      },
      {
         title: 'Company',
         id: 2,
         footerContent: [
            {
               name: 'About Us',
               link: '#',
               id: 1,
            },
            {
               name: 'Blog',
               link: '#',
               id: 2,
            },
            {
               name: 'Help Center',
               link: '#',
               id: 3,
            },
            {
               name: 'Contact Us',
               link: '#',
               id: 4,
            },
         ],
      },
      {
         title: 'Legal',
         id: 3,
         footerContent: [
            {
               name: 'Cookies Policy',
               link: '#',
               id: 1,
            },
            {
               name: 'Privacy Policy',
               link: '#',
               id: 2,
            },
            {
               name: 'Terms of Service',
               link: '#',
               id: 3,
            },
         ],
      },
   ];

   return (
      <div>
         <Box sx={{background: '#cfcfcf', minHeight: '250px'}}>
            <Container>
               <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'block'}}}>
                  <Box
                     sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        pt: '30px',
                     }}
                  >
                     <Grid sx={{width: '200px'}}>
                        <Typography color="white" variant="h6">
                           <img src={siteLogo} width={150} />
                        </Typography>
                        <Grid>
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
                        </Grid>
                     </Grid>
                     {footerInfo.map(item => (
                        <Grid key={item.id} sx={{width: '200px'}}>
                           <Typography variant="h6" color="black">
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
                                       color: 'black',
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
                           <Typography variant="h6" color="black">
                              Install App
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
                  <Divider sx={{mt: '10px', backgroundColor: 'black'}} />
                  <Box
                     sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                     }}
                  >
                     <Typography color="black">
                        © 2023 - All rights reserved
                     </Typography>
                     <ButtonGroup>
                        <NavLink to="#">
                           <IconButton sx={{color: 'black'}}>
                              <InstagramIcon />
                           </IconButton>
                        </NavLink>
                        <NavLink to="#">
                           <IconButton sx={{color: 'black'}}>
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
                     <Typography variant="h6" color="black">
                        Install App
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
                     <Typography color="black">
                        © 2023 - All rights reserved
                     </Typography>
                     <ButtonGroup>
                        <NavLink to="#">
                           <IconButton sx={{color: 'black'}}>
                              <InstagramIcon />
                           </IconButton>
                        </NavLink>
                        <NavLink to="#">
                           <IconButton sx={{color: 'black'}}>
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
