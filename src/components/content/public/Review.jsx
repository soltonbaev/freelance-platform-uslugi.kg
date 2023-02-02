import React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { Button, Card, CardContent } from "@mui/material";

const Review = () => {
  const [value, setValue] = React.useState(2);
  let rating = [];
  let review = [];

  function addReview(){
    
  }
  return (
    <Box>
      <Button>Оставить отзыв</Button>
      <Button>Посмотреть отзывы</Button>
    <Card>
      <Box
        sx={{
          "& > legend": { mt: 2 },
        }}
      >
        <Typography component="legend">Controlled</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
       
      </Box>
      <CardContent>
        <Typography>Имя: </Typography>
        <Typography>Дата:</Typography>
        <Typography>Отзыв:</Typography>
      </CardContent>
    </Card>
    </Box>
  );
};

export default Review;
