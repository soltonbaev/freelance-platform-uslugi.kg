import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
  Pagination,
  ListItem,
  List,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../../../contexts/GlobalContextProvider";
import categoryPage from "./css/categoryPage.css";

const CategoriesPage = () => {
  const { servicesArr, categoriesArr, getCategoriesServices, getServices } =
    useGlobalContext();
  const [page, setPage] = useState(1);
  const numOfPages = Math.ceil(categoriesArr.length / 2);

  useEffect(() => {
    getCategoriesServices();
    getServices();
  }, []);

  function currentData() {
    const begin = (page - 1) * 2;
    const end = begin + 2;
    return categoriesArr.slice(begin, end);
  }

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

      <ul className="nav-way" style={{ display: "flex", color: "black" }}>
        <li>
          <NavLink to="/" style={{ color: "black" }}>
            Главная страница
          </NavLink>
        </li>
        <li>
          <NavLink to="/categories-page" style={{ color: "black" }}>
            Все сервисы
          </NavLink>
        </li>
      </ul>

      <Container
        className="all-services-content"
        sx={{ mt: "30px", mb: "30px" }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 6 }}>
            {currentData().map((item) => (
              <Grid item xs={3} key={item.id}>
                <Card>
                  <CardMedia
                    component="img"
                    height="300px"
                    width="200px"
                    image={item.imageUrl}
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
                    <Typography variant="body1">{item.desc}</Typography>
                  </Box>
                  <Divider></Divider>
                  {servicesArr.map((service) => {
                    if (service.category === item.id)
                      return (
                        <CardContent sx={{ margin: "10px 0", padding: 0 }}>
                          <NavLink
                            className="nav-link"
                            style={{ color: "black" }}
                            to={`/task-page/${service.title}`}
                          >
                            {service.title}
                          </NavLink>
                        </CardContent>
                      );
                  })}
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Grid item md={12}>
          <Box sx={{ mt: "20px", display: "flex", justifyContent: "center" }}>
            <Pagination
              count={numOfPages}
              variant="outlined"
              shape="rounded"
              page={page}
              onChange={(e, p) => setPage(p)}
            />
          </Box>
        </Grid>
      </Container>
    </div>
  );
};

export default CategoriesPage;
