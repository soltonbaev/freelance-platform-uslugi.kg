import { CardMedia, List, ListItem, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import kgMap from './css/images/kyrgyzstan_map.png'

const Location = () => {
   return <div>
      <Container> 
      <Typography variant='h5' textAlign="center" mb="20px">Города в которых мы работаем</Typography>
      {/* <CardMedia src={kgMap} /> */}
      <img src={kgMap} alt="map" style={{width: "100%"}} />
      <List className='cityMap' sx={{display: "flex", flexDirection: {xs: "column", sm: "row"}, textAlign: "center", fontSize: "20px"}}>
         <ListItem><Link to="*">Бишкек</Link></ListItem>
         <ListItem><Link to="*">Ош</Link></ListItem>
         <ListItem><Link to="*">Джалал-Абад</Link></ListItem>
         <ListItem><Link to="*">Чолпон-Ата</Link></ListItem>
         <ListItem><Link to="*">Баткен</Link></ListItem>
      </List>
      </Container>   
     
   </div>;
};

export default Location;
