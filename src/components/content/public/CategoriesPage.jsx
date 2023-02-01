import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../../../contexts/GlobalContextProvider";
import categoryPage from "./css/categoryPage.css";

const CategoriesPage = () => {
  const { servicesArr, categoriesArr, getCategoriesServices, getServices } = useGlobalContext();
  // const { categories, setCategories} = useState(categoriesArr);
  // const { services, setServices} = useState([servicesArr]);

  useEffect(() => {
    getCategoriesServices();
    getServices();
 }, []);

//  useEffect(() => {
//   setServices(servicesArr)
//  }, [servicesArr]);
 
//  useEffect(() => {
//   setCategories(categoriesArr)
//  }, [categoriesArr])
// setCategories(categoriesArr);
// servicesArr.forEach(element => {
//   console.log("asd", element);
// });

 console.log("Asd", servicesArr);
 console.log("fdsad", categoriesArr);


// const services = servicesArr.filter(service => {
//   if(service.category === category[0].id) return service;
// })

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
              Все наши сервисы
            </Typography>

          </Box>
        </Container>
      </Box>
      {/* ============ */}
      <Container
        className="all-services-content"
        sx={{ mt: "30px", mb: "30px" }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 6, md: 9 }}
          >
            
            {categoriesArr.map((item) => (
              <Grid item xs={3} key={item.id}>
                
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    width="200"
                    image={item.imgUrl}
                    alt={item.title}
                  />
                  <Box
                    sx={{ margin: "10px 0", color: "black", padding: "0 5px" }}
                  >
                    <NavLink
                      className="nav-link"
                      style={{ color: "black" }}
                      to={`/task-category/${item.id}`}
                    >
                      <Typography variant="h6" component="p">
                        {item.title}
                      </Typography>
                    </NavLink>
                    <Typography variant="body1">
                      {item.desc}
                    </Typography>
                  </Box>
                  <Divider></Divider>
                  {servicesArr.map((service) => {
                    if(service.category === item.id) return (
                      <CardContent sx={{ margin: "10px 0", padding: 0 }}>
                        <NavLink
                          className="nav-link"
                          style={{ color: "black" }}
                          to="*"
                        >
                          {service.title}
                        </NavLink>
                      </CardContent>
                    )
                  })}
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
