import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useGlobalContext } from "../../../contexts/GlobalContextProvider";

const WorkerProfileMaodal = () => {
  const { userDetails } = useGlobalContext();
  console.log(userDetails);
  return (
    <div>
      <Card
        sx={{
          maxWidth: "60rem",

          margin: "auto",
          marginTop: "5vh",
          marginBottom: "5vh",
          border: "1px solid grey",
          borderRadius: "10px",
        }}
      >
        <CardActionArea sx={{ display: "flex" }}>
          <CardMedia
            component="img"
            sx={{
              height: "400px",
              margin: "1rem",
              borderRzadius: "10px",
            }}
            image={userDetails.imgUrl}
          />
          <CardContent sx={{ width: "60vw" }}>
            <Typography
              sx={{ marginTop: "10px" }}
              gutterBottom
              variant="h5"
              component="div"
            >
              Карточка работника
            </Typography>
            <Typography
              sx={{ marginTop: "10px" }}
              variant="body2"
              color="text.secondary"
            >
              Имя:{userDetails.firstName}
            </Typography>
            <Typography
              sx={{ marginTop: "10px" }}
              variant="body2"
              color="text.secondary"
            >
              Фамилия:{userDetails.lastName}
            </Typography>
            <Typography
              sx={{ marginTop: "10px" }}
              variant="body2"
              color="text.secondary"
            >
              Адрес почты:{userDetails.email}
            </Typography>
            <Typography
              sx={{ marginTop: "10px" }}
              variant="body2"
              color="text.secondary"
            >
              Город:{userDetails.city}
            </Typography>
            <Typography
              sx={{ marginTop: "10px" }}
              variant="body2"
              color="text.secondary"
            >
              Почасовая Оплата:{userDetails.hourlyWage}
            </Typography>
            <Typography
              sx={{ marginTop: "10px" }}
              variant="body2"
              color="text.secondary"
            >
              Обо мне:{userDetails.aboutMe}
            </Typography>

            <Typography
              sx={{ marginTop: "10px" }}
              variant="body2"
              color="text.secondary"
            >
              Мои отзывы:{userDetails.isUserWorker}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default WorkerProfileMaodal;
