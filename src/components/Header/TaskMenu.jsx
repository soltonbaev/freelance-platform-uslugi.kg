import { Grid, List, ListItem, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import taskMenu from "./css/taskMenu.css";

const TaskMenu = () => {
  const services = [
    {
      title: "Moving Services",
      link: "#",
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
    <Box>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            minHeight: "30px",
          }}
        >
          <Grid container spacing={0}>
            {services.map((category) => (
              <Grid className="services" sx={{ width: "190px" }}>
                <Box
                  className="servicesItem"
                  sx={{ textAlign: "center", minHeight: "30px" }}
                >
                  <Link to="*">{category.title}</Link>

                  <ul className="servicesList">
                    {category.subServices.map((item) => (
                      <li>
                        <Link to={item.link}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default TaskMenu;
