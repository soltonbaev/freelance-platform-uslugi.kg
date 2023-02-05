import {Divider, Grid, List, ListItem, Paper, Typography} from '@mui/material';
import {Box, Container} from '@mui/system';
import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useGlobalContext} from '../../contexts/GlobalContextProvider';
import {ConsoleGroup, ConsoleGroupEnd} from '../../helpers/console';
import './css/taskMenu.css';

const TaskMenu = () => {
   useEffect(() => {
      ConsoleGroup('Spawning TaskMenu...');
      return () => {
         ConsoleGroupEnd('Ending TaskMenu...');
      };
   }, []);
   const {
      servicesArr,
      categoriesArr,
      getCategoriesServices,
      getServices,
   } = useGlobalContext();

   // useEffect(() => {
   //   getCategoriesServices();
   //   getServices();
   // }, []);

   return (
      <Box sx={{mt: '20px', mb: '20px'}}>
         <Container>
            <Box
               sx={{
                  minHeight: '30px',
                  maxWidth: '1200px',
                  flexGrow: 1,
                  display: {sm: 'block', xs: 'none'},
               }}
            >
               <Grid
                  container
                  spacing={0}
                  sx={{
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'center',
                     gap: '30px',
                  }}
               >
                  {categoriesArr.map(category => (
                     <Grid key={`tm-${category.id}`} className="services">
                        <Box
                           className="servicesItem"
                           sx={{textAlign: 'center', minHeight: '30px'}}
                        >
                           <Link to="*">{category.title}</Link>
                           <ul className="servicesList">
                              <Paper
                                 elevation={3}
                                 sx={{background: 'white', padding: '5px'}}
                              >
                                 {servicesArr.map(service => {
                                    if (service.category === category.id) {
                                       return (
                                          <li key={`tm-${service.title}`}>
                                             <Link
                                                to={`/task-page/${service.title}`}
                                             >
                                                {service.title}
                                             </Link>
                                          </li>
                                       );
                                    }
                                 })}
                              </Paper>
                           </ul>
                        </Box>
                     </Grid>
                  ))}
               </Grid>
            </Box>

            {/* ==================================================================== */}

            <Box
               sx={{
                  minHeight: '30px',
                  maxWidth: '800px',
                  flexGrow: 1,
                  display: {sm: 'none', xs: 'block'},
               }}
            >
               <ul className="servicesMenu">
                  <Typography
                     sx={{
                        borderLeft: '1px solid #1d76e2',
                        paddingLeft: '5px',
                        color: '#1d76e2',
                     }}
                  >
                     Категории
                  </Typography>

                  <Paper
                     elevation={3}
                     sx={{
                        background: 'white',
                        padding: '5px',
                        color: '#1d76e2',
                     }}
                  >
                     {categoriesArr.map(category => (
                        <li key={`tmm-${category.id}`}>
                           <Grid className="services" sx={{width: '180px'}}>
                              <Box
                                 className="servicesItem"
                                 sx={{
                                    textAlign: 'center',
                                    minHeight: '30px',
                                 }}
                              >
                                 <Typography>{category.title}</Typography>

                                 <Box className="servicesList">
                                    <Paper
                                       elevation={3}
                                       sx={{
                                          background: 'white',
                                          padding: '5px',
                                       }}
                                    >
                                       {servicesArr.map(service => {
                                          if (
                                             service.category === category.id
                                          ) {
                                             return (
                                                <Box
                                                   key={`tmm-${service.title}`}
                                                >
                                                   <Link
                                                      to={`/task-page/${service.title}`}
                                                   >
                                                      {service.title}
                                                   </Link>
                                                </Box>
                                             );
                                          }
                                       })}
                                    </Paper>
                                 </Box>
                              </Box>
                           </Grid>
                        </li>
                     ))}
                  </Paper>
               </ul>
            </Box>
         </Container>
      </Box>
   );
};

export default TaskMenu;
