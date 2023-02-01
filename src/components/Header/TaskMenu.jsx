import { Grid, List, ListItem, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../contexts/GlobalContextProvider";
import taskMenu from "./css/taskMenu.css";

const TaskMenu = () => {
  const { servicesArr, categoriesArr, getCategoriesServices, getServices } =
    useGlobalContext();

  useEffect(() => {
    getCategoriesServices();
    getServices();
  }, []);

  console.log("Asd", categoriesArr);

  return (
    <Box sx={{ mt: "10px", mb: "10px" }}>
      <Container>
        <Box
          sx={{
            minHeight: "30px",
            // width: "100%",
            flexGrow: 1,
            display: { sm: "block", xs: "none" },
          }}
        >
          <Grid
            container
            spacing={0}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {categoriesArr.map((category) => (
              <Grid className="services" sx={{ width: "180px" }}>
                <Box
                  className="servicesItem"
                  sx={{ textAlign: "center", minHeight: "30px" }}
                >
                  <Link to="*">{category.title}</Link>

                  <ul className="servicesList">
                    <li style={{ fontWeight: "bold" }}>Популярные услуги</li>
                    {servicesArr.map((service) => {
                      if (service.category === category.id) {
                        return (
                          <li>
                            <Link to="*">{service.title}</Link>
                          </li>
                        );
                      }
                    })}
                  </ul>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* ==================================================================== */}

        <Box
          sx={{
            minHeight: "30px",
            // width: "100%",
            flexGrow: 1,
            display: { sm: "none", xs: "block" },
          }}
        >
          <ul className="servicesMenu">
            <Typography
              sx={{ borderLeft: "1px solid black", paddingLeft: "5px" }}
            >
              Services
            </Typography>
            <li className="servicesMenuList">
              {categoriesArr.map((category) => (
                <li>
                  <Grid className="services" sx={{ width: "180px" }}>
                    <Box
                      className="servicesItem"
                      sx={{ textAlign: "center", minHeight: "30px" }}
                    >
                      <Typography>{category.title}</Typography>

                      <ul className="servicesList">
                        <li style={{ fontWeight: "bold" }}>
                          Популярные услуги
                        </li>
                        {servicesArr.map((service) => {
                          if (service.category === category.id) {
                            return (
                              <li>
                                <Link to="*">{service.title}</Link>
                              </li>
                            );
                          }
                        })}
                      </ul>
                    </Box>
                  </Grid>
                </li>
              ))}
            </li>
          </ul>
        </Box>
      </Container>
    </Box>
  );
};

export default TaskMenu;
