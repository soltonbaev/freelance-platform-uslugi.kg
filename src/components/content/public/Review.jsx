import React from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { Card, CardContent } from "@mui/material";

const Review = () => {
  const [value, setValue] = React.useState(2);
  return (
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
        <Typography component="legend">Read only</Typography>
        <Rating name="read-only" value={value} readOnly />
        <Typography component="legend">Disabled</Typography>
        <Rating name="disabled" value={value} disabled />
        <Typography component="legend">No rating given</Typography>
        <Rating name="no-value" value={null} />
      </Box>
      <CardContent>
        <Typography>Имя: </Typography>
        <Typography>Дата:</Typography>
        <Typography>Отзыв:</Typography>
      </CardContent>
    </Card>
  );
};

export default Review;
