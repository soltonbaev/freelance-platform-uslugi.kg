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

const TaskCategoryPage = () => {
  return (
    <Box>
      <Box className="bgImage">
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
              color: "white",
            }}
          >
            Ricardo
          </Typography>
          <Typography
            style={{
              color: "white",
              textAlign: "center",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
            beatae?
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
              image="https://yandex.ru/images/search?text=foto&img_url=http%3A%2F%2Fplacepic.ru%2Fwp-content%2Fuploads%2F2018%2F10%2Fbfc11ec1075aa8714a8dfc780382e413.jpg&pos=0&rpt=simage&stype=image&lr=10309&parent-reqid=1675156893159477-14106531019203696290-vla1-3291-vla-l7-balancer-8080-BAL-6001&source=serp
               "
              alt="green iguana"
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
                Lizard
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
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
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
    </Box>
  );
};

export default TaskCategoryPage;
