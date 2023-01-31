import { Box, Button, Container, Divider, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import becomeWorker from "./css/becomeWorker.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Stack } from "@mui/system";

const BecomeWorker = () => {

   const [cityInp, setCity] = useState("");
   const [categoryInp, setCategory] = useState("");

  return (
    <div>
      <Box className="bgImage">
        <Container>
          <Box
            sx={{
              height: "400px",
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
              justifyContent: "center",
              
            }}
          >
            <Box
              width={500}
              sx={{ height: "90%", padding: "20px", background: "#ffffff" }}
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
              <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}} >
               <Stack spacing={2}>
                <TextField
                  label="Выберите город"
                  select
                  value={cityInp}
                  sx={{ width: 300 }}
                  onChange={(e) => setCity(e.target.value)}
                >
                  <MenuItem value="bishkek">Бишкек</MenuItem>
                  <MenuItem value="osh">Ош</MenuItem>
                  <MenuItem value="jalal-abad">Джалал-Абад</MenuItem>
                  <MenuItem value="karakol">Каракол</MenuItem>
                  <MenuItem value="tokmok">Токмок</MenuItem>
                </TextField>
                <TextField
                  label="Выберите категорию"
                  select
                  value={categoryInp}
                  sx={{ width: 300 }}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <MenuItem value="clining">Клининг</MenuItem>
                  <MenuItem value="yardwork-services">Садовые работы</MenuItem>
                  <MenuItem value="furniture-assembly">Сборка мебели</MenuItem>
                  <MenuItem value="moving">Помощь с переездом</MenuItem>
                </TextField>
               </Stack>
               <Box sx={{textAlign: "center", display: "flex", justifyContent: "center", flexDirection: "column", margin: "0 auto"}}>
                  <Typography variant="h4" >{categoryInp && cityInp ? Math.floor(Math.random() * 200) : "0"} сом </Typography>
                  <Typography variant="h5">в час</Typography>
               </Box>
              </Box>
              {/* ==== */}
              <Divider sx={{ background: "white", mb: "10px", mt: "10px" }} />
              <Button sx={{width: "100%"}} variant="contained" color="success">
               Начать работать
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
      <Container>as;dm</Container>
    </div>
  );
};

export default BecomeWorker;

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const category = [
   { label: "Клининг" },
   { label: "Садовые работы" },
   { label: "Сборка мебели" },
   { label: "Помощь с переездом" },
 ];
