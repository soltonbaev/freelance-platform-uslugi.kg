import {

  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import becomeWorker from "./css/becomeWorker.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Stack } from "@mui/system";
import smartphoneLogo from "./css/images/icons/smartphone.svg";
import analyticsLogo from "./css/images/icons/analytics.svg";
import moneyLogo from "./css/images/icons/money.svg";
import {useStepWizardContext} from '../../../contexts/StepWizardContext';
import {useGlobalContext} from '../../../contexts/GlobalContextProvider';
import {useNavigate} from 'react-router-dom';

const BecomeWorker = () => {
   const navigate = useNavigate();
   const {city, setCity} = useStepWizardContext();
   const {
      category,
      setCategory,
      cities,
      categoriesArr,
      getCategoriesServices,
   } = useGlobalContext();

   useEffect(() => {
      getCategoriesServices();
   }, []);

  return (
    <div>
      <Box className="bgImage">
        <Container>
          <Box
            sx={{
              minHeight: "400px",
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                height: "90%",
                padding: "20px",
                background: "#ffffff",
                width: { xs: "80%", sm: "500px" },
              }}
            >
              <Typography
                color="black"
                variant="h4"
                sx={{ mb: "20px", fontWeight: "bold" }}
              >
                Найди работу легко и просто!
              </Typography>
              <Typography color="black" variant="h6">
                Посмотри сколько зарабатывают в среднем на нашем сайте
              </Typography>
              <Divider sx={{ background: "white", mb: "10px" }} />

              {/* ==== */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: { xs: "column", sm: "row" },
                }}
              >
                <Stack spacing={2}>
                           <FormControl fullWidth>
                              <InputLabel id="demo-simple-select-label">
                                 Выбрать город
                              </InputLabel>
                              <Select
                                 labelId="demo-simple-select-label"
                                 id="demo-simple-select"
                                 value={city}
                                 label="Город"
                                 onChange={e => {
                                    setCity(e.target.value);
                                 }}
                              >
                                 {cities.map(city => {
                                    return (
                                       <MenuItem value={city}>{city}</MenuItem>
                                    );
                                 })}
                              </Select>
                           </FormControl>
                           <FormControl fullWidth>
                              <InputLabel id="demo-simple-select-label">
                                 Выбрать категорию
                              </InputLabel>
                              <Select
                                 labelId="demo-simple-select-label"
                                 id="demo-simple-select"
                                 value={category}
                                 label="Категория"
                                 onChange={e => {
                                    setCategory(e.target.value);
                                 }}
                              >
                                 {categoriesArr.map(category => {
                                    return (
                                       <MenuItem value={category.id}>
                                          {category.title}
                                       </MenuItem>
                                    );
                                 })}
                              </Select>
                           </FormControl>
                        </Stack>
                <Box
                  sx={{
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: { xs: "row", sm: "column" },
                    margin: "0 auto",
                  }}
                >
                  <Typography variant="h4">
                    {categoryInp && cityInp
                      ? Math.floor(Math.random() * 200)
                      : "0"}{" "}
                    сом{" "}
                  </Typography>
                  <Typography variant="h5" sx={{ padding: 0, ml: "4px" }}>
                    в час
                  </Typography>
                </Box>
              </Box>
              {/* ==== */}
              <Divider sx={{ background: "white", mb: "10px", mt: "10px" }} />
               <Button
                        onClick={() => {
                           navigate('/auth');
                        }}
                        sx={{width: '100%'}}
                        variant="contained"
                        color="success"
                     >
                        Начать работать
                     </Button>
            </Box>
          </Box>
        </Container>
      </Box>
      {/* =========== */}

      <Box>
        <Box
          sx={{
            width: "300px",
            borderBottom: "2px solid black",
            margin: "50px auto",
          }}
        ></Box>
      </Box>

      <Container>
        <Box
          sx={{
            margin: "0 auto",
            width: "60%",
            textAlign: "center",
            mb: "50px",
          }}
        >
          <Typography variant="h4" mb={2} sx={{ fontWeight: "bold" }}>
            Гибкая работа в Ваших руках.
          </Typography>
          <Typography variant="h6">
            Найдите местную работу, которая соответствует вашим навыкам и
            графику. С TaskRabbit у вас есть свобода и поддержка, чтобы быть
            своим собственным боссом.
          </Typography>
        </Box>
        {/* =========== */}

        <Grid container spacing={{ xs: 2, md: 6 }} columns={{ sm: 2, md: 12 }}>
          <Grid item xs={1} sm={2} md={4} sx={{ marginBottom: "30px" }}>
            <img src={smartphoneLogo} width="70px" alt="smartphone" />
            <Typography
              variant="h4"
              mt={3}
              mb={3}
              sx={{ height: { md: "85px" } }}
            >
              Сам себе босс
            </Typography>
            <Typography variant="h6">
              Работайте как, когда и где хотите. Предлагайте услуги в категориях
              и устанавливайте гибкий график и зону работы.
            </Typography>
          </Grid>
          <Grid item xs={1} sm={2} md={4} sx={{ marginBottom: "30px" }}>
            <img src={analyticsLogo} width="70px" alt="analyticsLogo" />
            <Typography variant="h4" mt={3} mb={3}>
              Развивайте свой бизнес
            </Typography>
            <Typography variant="h6">
              Мы свяжем вас с клиентами в вашем регионе и укажем способы
              саморекламы, чтобы вы могли сосредоточиться на том, что у вас
              получается лучше всего.
            </Typography>
          </Grid>
          <Grid item xs={1} sm={2} md={4} sx={{ marginBottom: "30px" }}>
            <img src={moneyLogo} width="70px" alt="money" />
            <Typography variant="h4" mt={3} mb={3}>
              Устанавливайте свои тарифы
            </Typography>
            <Typography variant="h6">
              Вы сохраняете 100% того, что вы берете, плюс чаевые! Выставляйте
              счета и получайте оплату напрямую через нашу безопасную платежную
              систему.
            </Typography>
          </Grid>
        </Grid>
        {/* ======== */}
        {/* https://skladikoff.ru/wp-content/uploads/2022/09/muving-1024x683.jpeg */}
      </Container>
      <Box className="bgImageAbout">
        <Container>
          <Box
            sx={{
              minHeight: "400px",
              display: "flex",
              margin: "50px 0",
              flexDirection: "column",
              alignItems: "end",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                height: "100%",
                padding: "20px",

                background: "#ffffff",
                width: { xs: "80%", sm: "500px" },
              }}
            >
              <Typography
                color="black"
                variant="h4"
                sx={{ mb: "20px", fontWeight: "bold" }}
              >
                Что такое uslugi.kg?
              </Typography>
              <Typography color="black" variant="h6">
                uslugi.kg связывает занятых людей, нуждающихся в помощи, с
                надежными местными таскировщиками, которые могут помочь во всем,
                от ремонта дома до поручений. Как Tasker, вы можете получать
                деньги за то, что вам нравится, когда и где вы хотите, и при
                этом спасать день для кого-то в вашем городе.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box>
        <Box
          sx={{
            width: "300px",
            borderBottom: "2px solid black",
            margin: "50px auto",
          }}
        ></Box>
      </Box>

      <Container>
        <Box>
          <Typography
            textAlign="center"
            variant="h4"
            sx={{ fontWeight: "bold", mb: "50px" }}
          >
            Как начать работать
          </Typography>
          <Grid
            container
            spacing={{ xs: 2, md: 6 }}
            columns={{ sm: 4, md: 12 }}
          >
            <Grid item xs={1} sm={2} md={4} sx={{ marginBottom: "30px" }}>
              <Typography variant="h5" mb="10px" sx={{ fontWeight: "bold" }}>
                1. Зарегистрируйтесь
              </Typography>
              <Typography variant="h6">
                Для того, чтобы начать работать необходимо зарегистрироваться.
              </Typography>
            </Grid>
            <Grid item xs={1} sm={2} md={4} sx={{ marginBottom: "30px" }}>
              <Typography variant="h5" mb="10px" sx={{ fontWeight: "bold" }}>
                2. Создайте свой профиль
              </Typography>
              <Typography variant="h6">
                Выберите, какие услуги вы хотите предложить и где.
              </Typography>
            </Grid>
            <Grid item xs={1} sm={2} md={4} sx={{ marginBottom: "30px" }}>
              <Typography variant="h5" mb="10px" sx={{ fontWeight: "bold" }}>
                3. Подтвердите свое право на выполнение задачи
              </Typography>
              <Typography variant="h6">
                Подтвердите свою личность и при необходимости отправьте
                подтверждающие документы.
              </Typography>
            </Grid>
            <Grid item xs={1} sm={2} md={4} sx={{ marginBottom: "30px" }}>
              <Typography variant="h5" mb="10px" sx={{ fontWeight: "bold" }}>
                4. Оплатить регистрационный сбор
              </Typography>
              <Typography variant="h6">
                В соответствующих городах мы взимаем регистрационный сбор в
                размере 1000 сом, что помогает нам предоставлять вам наилучшие
                услуги.
              </Typography>
            </Grid>
            <Grid item xs={1} sm={2} md={4} sx={{ marginBottom: "30px" }}>
              <Typography variant="h5" mb="10px" sx={{ fontWeight: "bold" }}>
                5. Установите свой график и рабочее место
              </Typography>
              <Typography variant="h6">
                Установите еженедельную доступность и согласитесь получать
                задания в тот же день.
              </Typography>
            </Grid>
            <Grid item xs={1} sm={2} md={4} sx={{ marginBottom: "30px" }}>
              <Typography variant="h5" mb="10px" sx={{ fontWeight: "bold" }}>
                6. Начать работу
              </Typography>
              <Typography variant="h6">
                Развивайте свой бизнес на своих условиях.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container>
        <Box textAlign="center" width="60vw" sx={{margin: "50px auto"}}>
          <Typography sx={{fontSize: {xs: "22px", sm: "26px" }}} >
            "Благодаря сайту uslugi.kg я смог найти работу и расплатиться с долгами, расплатиться по
            счетам, обеспечить свою семью, и у меня все еще оставалось
            достаточно места для будущих целей."
          </Typography >
          <Typography mt="10px" sx={{fontSize: {xs: "18px", sm: "22px" }}}>Иван И.И., Бишкек</Typography>
        </Box>
      </Container>
    </div>
  );
};

export default BecomeWorker;

