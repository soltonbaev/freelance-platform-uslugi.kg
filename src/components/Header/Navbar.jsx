import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {NavLink, useNavigate} from 'react-router-dom';
import {Container, Stack} from '@mui/system';
import Logo from './2023-01-30_15-20-08.png';
import {Menu, MenuItem} from '@mui/material';
import {useGlobalContext} from '../../contexts/GlobalContextProvider';
import {ConsoleGroup, ConsoleGroupEnd} from '../../helpers/console';

const Navbar = () => {
   useEffect(() => {
      ConsoleGroup('Spawning Navbar...');
      return () => {
         ConsoleGroupEnd('Ending Navbar...');
      };
   }, []);
   const navigate = useNavigate();
   const {
      user,
      setHasAccount,
      isUserWorker,
      setIsUserWorker,
      userDetails,
   } = useGlobalContext();
   const [anchorElNav, setAnchorElNav] = useState(null);
   const [pages, setPages] = useState([
      {name: 'Локации', link: '/', id: 1},
      {name: 'Предложить услуги', link: '/become-worker', id: 2},
   ]);
   const handleOpenNavMenu = event => {
      setAnchorElNav(event.currentTarget);
   };

   const handleCloseNavMenu = () => {
      setAnchorElNav(null);
   };

   useEffect(() => {
      if (user) {
         setPages([
            {name: 'Заказать услугу', link: '/', id: 1},
            {name: 'Все услуги', link: '/categories-page', id: 2},
            {name: 'Мои услуги', link: '/my-tasks', id: 3},
            {name: 'Мой Профиль', link: '/profile', id: 4},
         ]);
      } else {
         setPages([
            {name: 'Локации', link: '/location', id: 1},
            {name: 'Предложить услуги', link: '/become-worker', id: 2},
         ]);
      }
   }, [user]);

   useEffect(() => {
      if (user && isUserWorker) {
         setPages([
            {name: 'Мои услуги', link: '/my-tasks', id: 2},
            {name: 'Мой Профиль', link: '/profile', id: 3},
         ]);
      }
   }, [isUserWorker]);
   //  const pages = [
   //     {name: 'Locations', link: '/', id: 1}
   //     {name: 'Services', link: '/auth', id: 2},
   //     {name: 'Sigin up/Log in', link: '/task', id: 3},
   //  ];

   return (
      <Box
         sx={{
            backgroundColor: 'white',
            boxShadow: 3,
         }}
      >
         <Container sx={{backgroundColor: 'white'}}>
            <Box sx={{flexGrow: 1}}>
               <Box position="static" sx={{backgroundColor: 'white'}}>
                  <Toolbar
                     sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                     }}
                  >
                     {/* <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                     > */}
                     <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                           size="large"
                           aria-label="account of current user"
                           aria-controls="menu-appbar"
                           aria-haspopup="true"
                           onClick={handleOpenNavMenu}
                        >
                           <MenuIcon />
                        </IconButton>
                        <Menu
                           id="menu-appbar"
                           anchorEl={anchorElNav}
                           anchorOrigin={{
                              vertical: 'bottom',
                              horizontal: 'left',
                              color: 'black',
                           }}
                           keepMounted
                           transformOrigin={{
                              vertical: 'top',
                              horizontal: 'left',
                           }}
                           open={Boolean(anchorElNav)}
                           onClose={handleCloseNavMenu}
                           sx={{
                              display: {xs: 'block', md: 'none'},
                           }}
                        >
                           {pages.map(page => (
                              <MenuItem key={page.id}>
                                 <NavLink
                                    to={page.link}
                                    style={{
                                       textDecoration: 'none',
                                    }}
                                 >
                                    <Typography
                                       sx={{
                                          ml: 'auto',
                                          my: 1,
                                          color: 'black',
                                          display: 'block',
                                          fontSize: '15px',
                                       }}
                                    >
                                       {page.name}
                                    </Typography>
                                 </NavLink>
                              </MenuItem>
                           ))}
                           <Box
                              sx={{
                                 display: 'flex',
                                 justifyContent: 'center',
                              }}
                           >
                              {!user ? (
                                 <Button
                                    variant="outlined"
                                    color="error"
                                    style={{
                                       color: '#1d76e2',
                                       borderColor:
                                          'linear-gradient(45deg,  #1d76e2, #3f00c9)',
                                       fontWeight: 'bold ',
                                       width: '7rem',
                                       height: '3rem',
                                       textAlign: 'center',
                                    }}
                                    onClick={() => {
                                       setHasAccount(true);
                                       setIsUserWorker(false);
                                       navigate('/auth');
                                    }}
                                 >
                                    ВХОД
                                 </Button>
                              ) : (
                                 ''
                              )}
                              {/* {!isUserWorker && (
                                    <Button
                                       variant="outlined"
                                       color="error"
                                       style={{
                                          color: 'black',
                                          borderColor: 'black',
                                          fontWeight: 'bold ',
                                          width: '7rem',
                                          height: '3rem',
                                          textAlign: 'center',
                                       }}
                                       onClick={() => {
                                          setHasAccount(false);
                                          setIsUserWorker(true);
                                          navigate('/auth');
                                       }}
                                    >
                                       Become a Tasker
                                    </Button>
                                 )} */}
                           </Box>
                        </Menu>
                     </Box>
                     {/* </IconButton> */}
                     <Box sx={{flexGrow: '1', cursor: 'pointer'}}>
                        <img
                           onClick={() => {
                              navigate('/');
                           }}
                           src={Logo}
                           style={{
                              width: '13rem',
                           }}
                        />
                     </Box>
                     <Box>
                        <Typography
                           variant="h6"
                           component="div"
                           sx={{
                              flexGrow: 1,

                              display: {xs: 'none', md: 'flex'},
                           }}
                        >
                           {/* <NavLink
                       style={{
                         padding: "0 1rem",
                         textDecoration: "none",
                         color: "black",
                       }}
                       to="/"
                     >
                       Locations
                     </NavLink>
                     <NavLink
                       style={{
                         padding: "0 1rem",
                         textDecoration: "none",
                         color: "black",
                       }}
                       to="/auth"
                     >
                       Services
                     </NavLink>
                     <NavLink
                       style={{
                         padding: "0 1rem",
                         textDecoration: "none",
                         color: "black",
                       }}
                       to="/task"
                     >
                       Sigin up/Log in
                     </NavLink> */}
                           {pages.map(page => (
                              <MenuItem key={page.id}>
                                 <NavLink
                                    to={page.link}
                                    style={{
                                       textDecoration: 'none',
                                    }}
                                 >
                                    <Typography
                                       sx={{
                                          ml: 'auto',
                                          my: 1,
                                          color: 'black',
                                          display: 'block',
                                          fontSize: '15px',
                                       }}
                                    >
                                       {page.name}
                                    </Typography>
                                 </NavLink>
                              </MenuItem>
                           ))}
                           {!user ? (
                              <Stack direction="row" spacing={2}>
                                 <Button
                                    variant="contained"
                                    style={{
                                       color: 'white',
                                       background:
                                          'linear-gradient(27deg,  #1d76e2, #3f00c9)',
                                    }}
                                    onClick={() => {
                                       setHasAccount(true);
                                       setIsUserWorker(false);
                                       navigate('/auth');
                                    }}
                                 >
                                    ВХОД
                                 </Button>
                              </Stack>
                           ) : (
                              ''
                           )}
                           {/* {userDetails.isUserWorker || (
                              <Stack direction="row" spacing={2}>
                                 <Button
                                    variant="outlined"
                                    style={{
                                       color: 'black',
                                       borderColor: 'black',
                                    }}
                                    onClick={() => {
                                       setHasAccount(false);
                                       setIsUserWorker(true);
                                       navigate('/become-worker');
                                    }}
                                 >
                                    Предложить свои услуги
                                 </Button>
                              </Stack>
                           )} */}
                        </Typography>
                     </Box>
                  </Toolbar>
               </Box>
            </Box>
         </Container>
      </Box>
   );
};

export default Navbar;
