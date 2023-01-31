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
import { useGlobalContext } from "../../../contexts/GlobalContextProvider";
import categoryPage from "./css/categoryPage.css";

const CategoriesPage = () => {
  const { services } = useGlobalContext();

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
                  <Box
                    sx={{ margin: "10px 0", color: "black", padding: "0 5px" }}
                  >
                    <NavLink
                      className="nav-link"
                      style={{ color: "black" }}
                      to="/task-category"
                    >
                      <Typography variant="h6" component="p">
                        {item.title}
                      </Typography>
                    </NavLink>
                    <Typography variant="body1">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Typography>
                  </Box>
                  <Divider></Divider>
                  {item.subServices.map((service) => (
                    <CardContent sx={{ margin: "10px 0", padding: 0 }}>
                      <NavLink
                        className="nav-link"
                        style={{ color: "black" }}
                        to="*"
                      >
                        {service.name}
                      </NavLink>
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
