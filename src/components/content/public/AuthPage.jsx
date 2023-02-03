import React, {useState} from 'react';
import {LockOutlined} from '@mui/icons-material';
import {
   Avatar,
   Button,
   Checkbox,
   Container,
   CssBaseline,
   FormControl,
   FormControlLabel,
   Grid,
   InputLabel,
   Link,
   MenuItem,
   Paper,
   Select,
   TextField,
   Typography,
} from '@mui/material';

import {Box} from '@mui/system';
import {useGlobalContext} from '../../../contexts/GlobalContextProvider';
import fireBase from '../../../helpers/firebase';
import {useNavigate} from 'react-router-dom';
import {collection, setDoc, addDoc, doc, getDoc} from 'firebase/firestore';
import {db} from '../../../helpers/firebase';
import {useStepWizardContext} from '../../../contexts/StepWizardContext';

const AuthPage = () => {
   const navigate = useNavigate();
   const {
      user,
      setUser,
      hasAccount,
      setHasAccount,
      isLoggedIn,
      setIsLoggedIn,
      userDetails,
      setUserDetails,
      isUserWorker,
      setUserWorker,
      categoriesArr,
      setCategory,
      category,
      cities,
      firstName,
      setFirstName,
      lastName,
      setLastName,
      photoUrl,
      setPhotoUrl,
      hourlyWage,
      setHourlyWage,
   } = useGlobalContext();
   const {city, setCity, isWizardInProgress} = useStepWizardContext();

   let [email, setEmail] = useState('');
   let [phoneNumber, setPhoneNumber] = useState('');
   let [password, setPassword] = useState('');
   let [emailError, setEmailError] = useState('');
   let [passwordError, setPasswordError] = useState('');

   const handleSignUp = () => {
      fireBase
         .auth()
         .createUserWithEmailAndPassword(email, password)
         .then(res => {
            addToDb(res);
            setUser(res.user);
            isWizardInProgress ? navigate('/confirm') : navigate('/');
         })
         .catch(err => {
            switch (err.code) {
               case 'auth/email-already-in-use':
               case 'auth/invalid-email':
                  setEmailError(err.message);
                  break;
               case 'auth/weak-password':
                  setPasswordError(err.message);
                  break;
               default:
                  console.log(err.message);
            }
         });

      async function addToDb(signUpRes) {
         const userObj = {
            firstName: firstName,
            lastName: lastName,
            photoUrl: photoUrl,
            email: signUpRes.user.email,
            uid: signUpRes.user.uid,
            displayName: signUpRes.user.email.split('@')[0],
            isUserWorker: isUserWorker,
            city: city,
         };
         if (isUserWorker) {
            userObj.category = category;
            userObj.hourlyWage = hourlyWage;
            userObj.reviews = [];
         }
         try {
            const docRef = await setDoc(
               doc(db, 'userData', signUpRes.user.uid),
               userObj
            );
            const colRef = collection(docRef, 'reviews');
            const col = await addDoc(colRef, {col: 'reviews'});
            console.log('reviews collection added with  ID: ', col.id);
         } catch (e) {
            console.error('Error adding document: ', e);
         }
      }
   };

   const handleLogin = () => {
      fireBase
         .auth()
         .signInWithEmailAndPassword(email, password)
         .then(res => {
            setUser(res.user);
            getFromDb(res);
            setIsLoggedIn(true);
            isWizardInProgress ? navigate('/confirm') : navigate('/');
         })
         .catch(err => {
            switch (err.code) {
               case 'auth/user-disabled':
               case 'auth/invalid-email':
               case 'auth/user-not-found':
                  setEmailError(err.message);
                  break;
               case 'auth/wrong-password':
                  setPasswordError(err.message);
                  break;
               default:
                  console.log(err.message);
            }
         });
      async function getFromDb(loginRes) {
         const docRef = doc(db, 'userData', loginRes.user.uid);
         console.log('uid', loginRes.user.uid);
         const docSnap = await getDoc(docRef);
         if (docSnap.exists()) {
            setUserDetails(docSnap.data());
         } else {
            // doc.data() will be undefined in this case
            console.log('No such document!');
         }
      }
   };

   return (
      <Container maxWidth="sm">
         <Paper
            elevation={5}
            sx={{minHeight: '50vh', margin: '1rem', padding: '1rem'}}
         >
            {isUserWorker ? (
               <h1>Регистрация/Логин для продавца услуг</h1>
            ) : (
               <h1>Регистрация/Логин для покупателя услуг</h1>
            )}

            <CssBaseline />
            <Box
               sx={{
                  marginTop: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
               }}
            >
               <Avatar>
                  <LockOutlined />
               </Avatar>
               {hasAccount ? (
                  <Typography>Войти в свой аккаунт</Typography>
               ) : (
                  <Typography>Зарегистрировать аккаунт</Typography>
               )}
               <Box component="form" noValidate sx={{mt: 1}}>
                  {hasAccount || (
                     <TextField
                        margin="normal"
                        size="small"
                        required
                        fullWidth
                        id="first-name"
                        label="Имя"
                        name="firstName"
                        helperText={emailError}
                        value={firstName}
                        onChange={e => {
                           setFirstName(e.target.value);
                        }}
                        autoComplete="Имя"
                        autoFocus
                     />
                  )}
                  {hasAccount || (
                     <TextField
                        margin="normal"
                        size="small"
                        required
                        fullWidth
                        id="email"
                        label="Фамилия"
                        name="lastName"
                        helperText={emailError}
                        value={lastName}
                        onChange={e => {
                           setLastName(e.target.value);
                        }}
                        autoComplete="Фамилия"
                        autoFocus
                     />
                  )}

                  <TextField
                     margin="normal"
                     size="small"
                     required
                     fullWidth
                     id="email"
                     label="Email Address"
                     name="email"
                     helperText={emailError}
                     value={email}
                     onChange={e => {
                        setEmail(e.target.value);
                     }}
                     autoComplete="email"
                     autoFocus
                  />
                  <TextField
                     margin="normal"
                     size="small"
                     required
                     fullWidth
                     name="password"
                     label="Password"
                     type="password"
                     id="password"
                     autoComplete="current-password"
                     helperText={passwordError}
                     value={password}
                     onChange={e => {
                        setPassword(e.target.value);
                     }}
                  />
                  {hasAccount || (
                     <TextField
                        margin="normal"
                        size="small"
                        required
                        fullWidth
                        name="photoUrl"
                        label="Photo Url"
                        type="text"
                        id="photoUrl"
                        autoComplete="current-password"
                        helperText={passwordError}
                        value={photoUrl}
                        onChange={e => {
                           setPhotoUrl(e.target.value);
                        }}
                     />
                  )}

                  {hasAccount || (
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
                              return <MenuItem value={city}>{city}</MenuItem>;
                           })}
                        </Select>
                     </FormControl>
                  )}
                  {isUserWorker && !hasAccount && (
                     <TextField
                        margin="normal"
                        size="small"
                        required
                        fullWidth
                        name="wage"
                        label="Желаемая почасовая оплата в сомах"
                        type="number"
                        id="wage"
                        autoComplete="current-password"
                        helperText={passwordError}
                        value={hourlyWage}
                        onChange={e => {
                           setHourlyWage(e.target.value);
                        }}
                     />
                  )}

                  {isUserWorker && !hasAccount && (
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
                  )}

                  <FormControlLabel
                     control={<Checkbox value="remember" color="primary" />}
                     label="Remember me"
                  />

                  {hasAccount ? (
                     <Button
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2, backgroundColor: 'green'}}
                        onClick={handleLogin}
                     >
                        Sign In
                     </Button>
                  ) : (
                     <Button
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2, backgroundColor: 'royalblue'}}
                        onClick={handleSignUp}
                     >
                        Sign up
                     </Button>
                  )}

                  <Grid container>
                     <Grid item>
                        {hasAccount ? (
                           <Link
                              href="#"
                              variant="body2"
                              onClick={() => setHasAccount(!hasAccount)}
                           >
                              Нет аккаунта? Зарегистрируйтесь
                           </Link>
                        ) : (
                           <Link
                              href="#"
                              variant="body2"
                              onClick={() => setHasAccount(!hasAccount)}
                           >
                              Есть аккаунт? Залогиньтесь
                           </Link>
                        )}
                     </Grid>
                  </Grid>
               </Box>
            </Box>
         </Paper>
      </Container>
   );
};

export default AuthPage;
