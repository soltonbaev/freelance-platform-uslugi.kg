import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, useNavigate } from "react-router-dom";
import { Container, Stack } from "@mui/system";
import Logo from "./2023-01-30_15-20-08.png";
import { Menu, MenuItem } from "@mui/material";
import { useGlobalContext } from "../../contexts/GlobalContextProvider";

const Navbar = () => {
  const navigate = useNavigate();
  const {
    user,
    setHasAccount,
    hasAccount,
    isUserWorker,
    setIsUserWorker,
    test,
    isLoggedIn,
  } = useGlobalContext();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [pages, setPages] = React.useState([]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  React.useEffect(() => {
    console.log("navbar user", test);
    console.log("hasAccount", hasAccount);
    if (user) {
      setPages([
        { name: "Заказать услугу", link: "/", id: 1 },
        { name: "Мои услуги", link: "/my-tasks", id: 2 },
        { name: "Мой Профиль", link: "/profile", id: 3 },
      ]);
    } else {
      setPages([
        { name: "Все услуги", link: "/categories-page", id: 1 },
        { name: "Локации", link: "/", id: 2 },
        // {name: 'Войти/Зарегистрироваться', link: '/auth', id: 3},
      ]);
    }
  }, [user]);
  //  const pages = [
  //     {name: 'Locations', link: '/', id: 1},
  //     {name: 'Services', link: '/auth', id: 2},
  //     {name: 'Sigin up/Log in', link: '/task', id: 3},
  //  ];

  return (
    <Box
      sx={{
        backgroundColor: "#cecece",
      }}
    >
      <Container sx={{ backgroundColor: "#cecece" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Box position="static" sx={{ backgroundColor: "#cecece" }}>
            <Toolbar
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                      color: "black",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: "block", md: "none" },
                    }}
                  >
                    {pages.map((page) => (
                      <MenuItem key={page.id}>
                        <NavLink
                          to={page.link}
                          style={{
                            textDecoration: "none",
                          }}
                        >
                          <Typography
                            sx={{
                              ml: "auto",
                              my: 1,
                              color: "black",
                              display: "block",
                              fontSize: "15px",
                            }}
                          >
                            {page.name}
                          </Typography>
                        </NavLink>
                      </MenuItem>
                    ))}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      {!user ? (
                        <Button
                          variant="outlined"
                          color="error"
                          style={{
                            color: "black",
                            borderColor: "black",
                            fontWeight: "bold ",
                            width: "7rem",
                            height: "3rem",
                            textAlign: "center",
                          }}
                          onClick={() => {
                            setHasAccount(true);
                            setIsUserWorker(false);
                            navigate("/auth");
                          }}
                        >
                          Войти/Зарегистрироваться
                        </Button>
                      ) : (
                        ""
                      )}
                      {!isUserWorker && (
                        <Button
                          variant="outlined"
                          color="error"
                          style={{
                            color: "black",
                            borderColor: "black",
                            fontWeight: "bold ",
                            width: "7rem",
                            height: "3rem",
                            textAlign: "center",
                          }}
                          onClick={() => {
                            setHasAccount(false);
                            setIsUserWorker(true);
                            navigate("/auth");
                          }}
                        >
                          Become a Tasker
                        </Button>
                      )}
                    </Box>
                  </Menu>
                </Box>
              </IconButton>
              <Box sx={{ flexGrow: "1" }}>
                <img
                  src={Logo}
                  style={{
                    width: "10rem",
                  }}
                />
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    flexGrow: 1,

                    display: { xs: "none", md: "flex" },
                  }}
                >
                  {/* <NavLink
                       style={{
                         padding: "0 1rem",
                         textDecoration: "none",
                         color: "black",
                       }}
                       to="/"
                     >
                       Locations
                     </NavLink>
                     <NavLink
                       style={{
                         padding: "0 1rem",
                         textDecoration: "none",
                         color: "black",
                       }}
                       to="/auth"
                     >
                       Services
                     </NavLink>
                     <NavLink
                       style={{
                         padding: "0 1rem",
                         textDecoration: "none",
                         color: "black",
                       }}
                       to="/task"
                     >
                       Sigin up/Log in
                     </NavLink> */}
                  {pages.map((page) => (
                    <MenuItem key={page.id}>
                      <NavLink
                        to={page.link}
                        style={{
                          textDecoration: "none",
                        }}
                      >
                        <Typography
                          sx={{
                            ml: "auto",
                            my: 1,
                            color: "black",
                            display: "block",
                            fontSize: "15px",
                          }}
                        >
                          {page.name}
                        </Typography>
                      </NavLink>
                    </MenuItem>
                  ))}
                  {!user ? (
                    <Stack direction="row" spacing={2}>
                      <Button
                        variant="outlined"
                        color="error"
                        style={{
                          color: "black",
                          borderColor: "black",
                        }}
                        onClick={() => {
                          setHasAccount(true);
                          setIsUserWorker(false);
                          navigate("/auth");
                        }}
                      >
                        Войти/Зарегистрироваться
                      </Button>
                    </Stack>
                  ) : (
                    ""
                  )}
                  {isUserWorker || (
                    <Stack direction="row" spacing={2}>
                      <Button
                        variant="outlined"
                        color="error"
                        style={{
                          color: "black",
                          borderColor: "black",
                        }}
                        onClick={() => {
                          setHasAccount(false);
                          setIsUserWorker(true);
                          navigate("/become-worker");
                        }}
                      >
                        Предложить свои услуги
                      </Button>
                    </Stack>
                  )}
                </Typography>
              </Box>
            </Toolbar>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
