import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import categoryPage from "./css/categoryPage.css";

const CategoriesPage = () => {
  const services = [
    {
      title: "Moving Services",
      link: "#",
      imgUrl:
        "https://www.bostonmagazine.com/wp-content/uploads/sites/2/2019/06/moving-season-guide.jpg",
      subServices: [
        { name: "Help Moving", link: "#", id: 1 },
        { name: "Heavy Lifting", link: "#", id: 2 },
        { name: "Furniture Movers", link: "#", id: 3 },
        { name: "Full Service Help Moving", link: "#", id: 4 },
      ],
    },
    {
      title: "Mounting & Installation",
      link: "#",
      imgUrl:
        "https://cdn.xxl.thumbs.canstockphoto.com/man-mounting-smoke-detector-on-the-ceiling-picture_csp64092610.jpg",
      subServices: [
        { name: "TV Mounting", link: "#", id: 1 },
        { name: "Shelf Mounting", link: "#", id: 2 },
        { name: "Hang Christmas Lights", link: "#", id: 3 },
        { name: "Ceiling Fan Installation", link: "#", id: 4 },
      ],
    },
    {
      title: "Cleaning",
      link: "#",
      imgUrl:
        "https://expert-cleaning.com/wp-content/uploads/2020/11/1-Skolko-stoit-klining.jpg",
      subServices: [
        { name: "House Cleaning Services", link: "#", id: 1 },
        { name: "Deep Cleaning", link: "#", id: 2 },
        { name: "Car Washing", link: "#", id: 3 },
        { name: "Laundry Help", link: "#", id: 4 },
        { name: "Window Cleaning", link: "#", id: 5 },
      ],
    },
    {
      title: "Furniture Assembly",
      link: "#",
      imgUrl:
        "https://blog.puls.com/hs-fs/hubfs/puls-furnture-assembly-services-included.jpg?width=2400&name=puls-furnture-assembly-services-included.jpg",
      subServices: [
        { name: "Furniture Assembly", link: "#", id: 1 },
        { name: "Bed Assembly", link: "#", id: 2 },
        { name: "Bookshelf Assembly", link: "#", id: 3 },
        { name: "Disassemble furniture", link: "#", id: 4 },
      ],
    },
    {
      title: "Yardwork Services",
      link: "#",
      imgUrl:
        "https://gardenzilla.ca/wp-content/uploads/2021/01/Fall-Cleanup-009.jpg",
      subServices: [
        { name: "Gardening Services", link: "#", id: 1 },
        { name: "Lawn Care Services", link: "#", id: 2 },
        { name: "Gutter Cleaning", link: "#", id: 3 },
        { name: "Hedge Trimming Service", link: "#", id: 4 },
        { name: "Hose Installation", link: "#", id: 5 },
        { name: "Fence Staining", link: "#", id: 6 },
      ],
    },
    {
      title: "Winter Tasks",
      link: "#",
      imgUrl:
        "https://musor24.com/cache/images/9022499a3fca8d636a287e0bff32a621.jpg",
      subServices: [
        { name: "Snow Removal", link: "#", id: 1 },
        { name: "Sidewalk Salting", link: "#", id: 2 },
        { name: "Window Winterizationg", link: "#", id: 3 },
        { name: "Storm Door Installation", link: "#", id: 4 },
        { name: "Water Heater Maintenance", link: "#", id: 5 },
      ],
    },
  ];

  return (
    <div>
      <Box className="bgImage">
        {/* <img src='https://myqualityhandyman.com/wp-content/uploads/2020/08/AdobeStock_105876439-1-1080x662.jpg' style={{width: "100%", height: "100%", objectFit: "cover"}} /> */}
        <Container>
          <Box
            sx={{
              height: "400px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography color="white" variant="h2" textAlign="center">
              ALL SERVICES
            </Typography>
            <Typography color="white" variant="h5" textAlign="center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime,
              nam?
            </Typography>
          </Box>
        </Container>
      </Box>
      {/* ============ */}
      <Container className="all-services-content" sx={{ mt: "30px", mb: "30px" }}>
        <Box sx={{textAlign: "center"}} >
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 6, md: 9 }}
            
          >
            {services.map((item) => (
              <Grid item xs={3}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    width="200"
                    image={item.imgUrl}
                    alt={item.title}
                  />
                  <Box sx={{margin: "10px 0", color: "black", padding: "0 5px"}}>
                  <NavLink className='nav-link' style={{color: "black"}} to="*"><Typography variant="h6" component="p">{item.title}</Typography></NavLink>
                  <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>

                  </Box>
                  <Divider></Divider>
                  {item.subServices.map((service) => (
                    <CardContent sx={{margin: "10px 0", padding: 0}}>
                      <NavLink className='nav-link' style={{color: "black"}} to="*">{service.name}</NavLink>
                    </CardContent>
                  ))}
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default CategoriesPage;
