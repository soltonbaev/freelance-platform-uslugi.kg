import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import {
  Button,
  Card,
  CardContent,
  FormControl,
  TextField,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Review = () => {
  const [value, setValue] = React.useState(5);
  const [reviewInp, setReviewInp] = useState("");
  const [reviewArr, setReviewArr] = useState([]);
  const [ratingArr, setRatingArr] = useState([]);
  const [addReviewModal, setAddReviewModal] = useState(false);

  console.log(reviewInp);

  function addReview() {
    const arr = reviewArr;
    const ratArr = ratingArr;
    if (reviewInp === "") {
      alert("Поле не заполнено");
      return;
    }
    ratArr.push(value);
    arr.push(reviewInp);
    setReviewArr(arr);
    setRatingArr(ratArr);
    setReviewInp("");
    setAddReviewModal(false);
    setValue(5);
  }
  
  function findTotalRating(arr) {
    let sum = 0;
    arr.forEach((item) => {
      sum = sum + +item;
    });
    return sum / arr.length;
  }


  return (
    <Box>
      {/* ================================================================ */}
      <Button onClick={() => setAddReviewModal(true)} variant="contained" color="success" disableElevation>Оставить отзыв</Button>
      {addReviewModal ? (
        <Box className="add-reivew__modal">
          <FormControl
            className="inner-modal"
            sx={{ padding: "30px", width: "500px" }}
            fullWidth
          >
            <Box
              mb={4}
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography component="legend">Оценка</Typography>
                <Button onClick={() => setAddReviewModal(false)}>
                  {" "}
                  <CloseIcon />{" "}
                </Button>
              </Box>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Box>
            <Box mb="10px">
            <Typography mb="5px">Оставтьте отзыв</Typography>
            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="Ваш отзыв"
              value={reviewInp}
              multiline
              rows={4}
              defaultValue=""
              onChange={(e) => setReviewInp(e.target.value)}
              
            />

            </Box>
            <Button onClick={(e) => addReview()} >Добавить отзыв</Button>
          </FormControl>
        </Box>
      ) : (
        ""
      )}

      {/* ========================================================== */}

      <Card sx={{ width: "80vw", margin: "0 auto" }}>
        <CardContent>
          <Box>
            <Typography variant="h6" mb="20px">
              Средняя оценка:{" "}
              {ratingArr.length ? findTotalRating(ratingArr) : ""}
            </Typography>

            {reviewArr.map((item, index) => (
              <Box sx={{ mb: "30px" }}>
                <Typography variant="body1" mb={2}>
                  {item}
                </Typography>
                <Rating name="read-only" value={ratingArr[index]} readOnly />
                <Divider />
              </Box>
            ))}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Review;
