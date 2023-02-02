import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../../contexts/GlobalContextProvider";
import CheckIcon from "@mui/icons-material/Check";

const UnauthorizedHomePage = () => {
  const navigate = useNavigate();
  const {
    categoriesArr,
    category,
    setCategory,
    getCategoriesServices,
    getServices,
  } = useGlobalContext();

  useEffect(() => {
    getCategoriesServices();
    getServices();
  }, []);

  return (
    <Box>
      <h1>Добро пожаловать, дорогой гость5</h1>
      <Box
        sx={{
          backgroundImage:
            " url(https://placepic.ru/wp-content/uploads/2018/10/bfc11ec1075aa8714a8dfc780382e413.jpg)",

          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          mozBackgroundSize: "cover",
          oBackgroundSize: "cover",
          backgroundSize: "cover",
          webkitBackgroundSize: "cover",
          backgroundColor: "balck",
          width: "100%",
          height: "70vh",
          margin: "1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <FormControl
          fullWidth
          style={{
            display: "flex",
            margin: "auto",

            width: "50vw",
            backgroundColor: "black",
            borderRadius: "10px",
            borderColor: "blue",
            borderBlockColor: "blue",
          }}
        >
          <InputLabel
            id="demo-simple-select-label"
            sx={{
              color: "white",
            }}
          >
            Какими услугами вы хотели бы сегодня воспользоваться?
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Категория услуг"
            onChange={(e) => {
              setCategory(e.target.value);
              navigate("/task-options");
            }}
          >
            {categoriesArr.map((category) => {
              return <MenuItem value={category.id}>{category.title}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </Box>

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
            image="https://cdn.dribbble.com/users/506783/screenshots/5666924/tsr_4x.jpg"
          />
          <CardContent sx={{ width: "60vw" }}>
            <Typography
              sx={{ marginTop: "10px" }}
              gutterBottom
              variant="h5"
              component="div"
            >
              Повседневная жизнь стала проще
            </Typography>
            <Typography
              sx={{ marginTop: "10px" }}
              variant="body2"
              color="text.secondary"
            >
              Когда жизнь становится занятой, вам не нужно справляться с ней в
              одиночку. Верните время для того, что вы любите, не нарушая банк.
            </Typography>
            <Typography
              sx={{ marginTop: "10px" }}
              variant="body2"
              color="text.secondary"
            >
              <CheckIcon /> Выберите свой Tasker по отзывам, навыкам и цене
            </Typography>
            <Typography
              sx={{ marginTop: "10px" }}
              variant="body2"
              color="text.secondary"
            >
              <CheckIcon /> Планируйте, когда это работает для вас — уже сегодня
            </Typography>
            <Typography
              sx={{ marginTop: "10px" }}
              variant="body2"
              color="text.secondary"
            >
              <CheckIcon /> Общайтесь, платите, давайте чаевые и просматривайте
              все на одной платформе
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWarap: "wrap",
        }}
      >
        <Card
          sx={{
            minWidth: "30vw",
            height: "60vh",

            marginTop: "5vh",
            marginBottom: "5vh",
            border: "1px solid grey",
            borderRadius: "10px",
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
                width: "100px",
                height: "100px",
                margin: "20px",
              }}
              image="https://echwaluphotography.files.wordpress.com/2011/10/noo-12.jpg"
            />
            <CardContent>
              <Typography variant="h5">Nigger.N</Typography>
              <Typography variant="body2" sx={{ marginTop: "0.5rem" }}>
                100% положительных отзывов
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
              Собирание хлопка : Всю жизнь
            </Typography>

            <Typography
              variant="body2"
              sx={{
                marginTop: "0.5rem",
                fontWeight: "normal",
                fontSize: "20px",
              }}
            >
              Ограбление : Box KFC
            </Typography>

            <Typography
              variant="body2"
              sx={{
                marginTop: "0.5rem",
                fontWeight: "normal",
                fontSize: "20px",
              }}
            >
              Читать реп : 30 сом
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
              Потому что я черный,а черные лучше во всем
            </Typography>
          </Box>
        </Card>

        <Card
          sx={{
            minWidth: "30vw",
            height: "60vh",

            marginTop: "5vh",
            marginBottom: "5vh",
            border: "1px solid grey",
            borderRadius: "10px",
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
                width: "100px",
                height: "100px",
                margin: "20px",
              }}
              image="https://echwaluphotography.files.wordpress.com/2011/10/noo-12.jpg"
            />
            <CardContent>
              <Typography variant="h5">Nigger.N</Typography>
              <Typography variant="body2" sx={{ marginTop: "0.5rem" }}>
                100% положительных отзывов
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
              Собирание хлопка : Всю жизнь
            </Typography>

            <Typography
              variant="body2"
              sx={{
                marginTop: "0.5rem",
                fontWeight: "normal",
                fontSize: "20px",
              }}
            >
              Ограбление : Box KFC
            </Typography>

            <Typography
              variant="body2"
              sx={{
                marginTop: "0.5rem",
                fontWeight: "normal",
                fontSize: "20px",
              }}
            >
              Читать реп : 30 сом
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
              Потому что я черный,а черные лучше во всем
            </Typography>
          </Box>
        </Card>
        <Card
          sx={{
            minWidth: "30vw",
            height: "60vh",

            marginTop: "5vh",
            marginBottom: "5vh",
            border: "1px solid grey",
            borderRadius: "10px",
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
                width: "100px",
                height: "100px",
                margin: "20px",
              }}
              image="https://echwaluphotography.files.wordpress.com/2011/10/noo-12.jpg"
            />
            <CardContent>
              <Typography variant="h5">Nigger.N</Typography>
              <Typography variant="body2" sx={{ marginTop: "0.5rem" }}>
                100% положительных отзывов
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
              Собирание хлопка : Всю жизнь
            </Typography>

            <Typography
              variant="body2"
              sx={{
                marginTop: "0.5rem",
                fontWeight: "normal",
                fontSize: "20px",
              }}
            >
              Ограбление : Box KFC
            </Typography>

            <Typography
              variant="body2"
              sx={{
                marginTop: "0.5rem",
                fontWeight: "normal",
                fontSize: "20px",
              }}
            >
              Читать реп : 30 сом
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
              Потому что я черный,а черные лучше во всем
            </Typography>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default UnauthorizedHomePage;
