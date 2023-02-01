import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { Box, flexbox } from "@mui/system";
import React from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../../contexts/GlobalContextProvider";

const TaskCategoryPage = () => {
  // const { services } =useGlobalContext();
  const { servicesArr, categoriesArr, } = useGlobalContext();

  const params = useParams();

  const category= categoriesArr.filter(category => {
    if(category.id == params.id) return category;
  })

  const services = servicesArr.filter(service => {
    if(service.category === category[0].id) return service;
  })


  console.log("Asd", services);

  return (
    <Box>

        <Box
          sx={{
            background:
              "black",
            backgroundImage: `url(${category.imgUrl})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            webkitBackgroundSize: "cover",
            mozBackgroundSize: "cover",
            oBackgroundSize: "cover",
            backgroundSize: "cover",
            backgroundColor: "balck",
          }}
        >
          <Box
            sx={{
              width: "100vw",
              height: "400px ",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h2"
              style={{
                textAlign: "center",
                color: " #817979",
              }}
            >
              {category[0].title}
            </Typography>
            <Typography
              style={{
                color: " #817979",
                textAlign: "center",
                fontWeight: "30px",
                fontSize: "25px",
              }}
            >
              {category[0].desc}
            </Typography>
          </Box>
          {/* <img
          src="https://avatars.mds.yandex.net/i?id=c35e86300ad03620f1315bff8d910b00-5584150-images-thumbs&n=13"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        /> */}
        </Box>
        {services.map(service => (

      <Box>
        <Card
          sx={{
            width: { xs: "300px", md: "70vw" },

            display: "flex",
            margin: "auto",
            marginTop: "5vh",
            marginBottom: "5vh",
            border: "1px solid grey",
            borderRadius: "10px",
            flexDirection: { xs: "column" },
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140px"
              image={service.imageUrl}
              alt={service.title}
              sx={{
                float: { xs: "center", md: "left" },
                width: "200px",
                height: "200px",
                borderRadius: "50%",

                margin: "1vw auto",
                display: { xs: "flex", md: "block" },
                justifyContent: { xs: "center", md: "none" },
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                {service.title}
              </Typography>
              <Typography
                variant="body2"
                color="#3d463d"
                style={{
                  fontFamily: "Inter, Arial, Helvetica, sans-serif",
                  fontSize: "1rem",
                  fontWeight: "normal",
                }}
              >
                {service.desc}
              </Typography>
              <Box sx={{ marginTop: "2vw" }}>
                <Stack spacing={2} direction="row">
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "#0d7a5f",
                    }}
                  >
                    Contained
                  </Button>
                </Stack>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
        ))}
    </Box>
  );
};

export default TaskCategoryPage;
