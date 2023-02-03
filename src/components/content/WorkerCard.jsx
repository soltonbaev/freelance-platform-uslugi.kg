import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  useRadioGroup,
} from "@mui/material";
import React from "react";
import RenderRating from "./public/reviews/RenderRating";

const WorkerCard = (props) => {
  const { firstName, lastName, image, uid, skils, price, aboutMe } = props;

  return (
    <Card
      sx={{
        // minWidth: "30vw",
        // minWidth: { xs: "400px", lg: "30vw" },
        width: { xs: "400px", lg: "30vw" },
        height: "fit-content",

        margin: "auto",
        border: "1px solid grey",
        borderRadius: "10px",
        margin: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
        }}
      >
        <CardMedia
          component="img"
          style={{
            width: "120px",
            height: "120px",
            margin: "20px",
            borderRadius: "50%",
          }}
          image={image}
        />
        <CardContent>
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "20px", lg: "none" },
            }}
          >
            {firstName} {lastName}
          </Typography>
          <Typography variant="body2" sx={{ marginTop: "0.5rem" }}>
            <RenderRating uid={uid} />
          </Typography>
          <Typography variant="body2" sx={{ marginTop: "0.5rem" }}>
            132 выполненые задачи
          </Typography>
        </CardContent>
      </Box>
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            marginTop: "0.5rem",
            fontWeight: "50px",
            fontSize: "30px",
          }}
        >
          Скилы
        </Typography>

        <Typography
          variant="body2"
          sx={{
            marginTop: "0.5rem",
            fontWeight: "normal",
            fontSize: "20px",
          }}
        >
          {skils} : {price}сом/час
        </Typography>
      </Box>
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{ marginTop: "2rem", fontWeight: "bold", fontSize: "20px" }}
        >
          Почему я?
        </Typography>
        <Typography
          variant="body2"
          sx={{
            marginTop: "0.5rem",
            fontWeight: "normal",
            fontSize: "20px",
          }}
        >
          {aboutMe}
        </Typography>
      </Box>
    </Card>
  );
};

export default WorkerCard;
