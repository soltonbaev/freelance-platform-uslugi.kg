import {
   Avatar,
   Box,
   Button,
   Card,
   CardActions,
   CardContent,
   Grid,
   MenuItem,
   TextField,
   Typography,
} from '@mui/material';
import {Container} from '@mui/system';
import {deleteDoc, doc} from 'firebase/firestore';
import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useGlobalContext} from '../../../contexts/GlobalContextProvider';
import fireBase from '../../../helpers/firebase';
import WarningModal from '../public/WarningModal';
import {db} from '../../../helpers/firebase';
import RenderRating from '../public/reviews/RenderRating';
import {Console, ConsoleGroup, ConsoleGroupEnd} from '../../../helpers/console';

const ClientProfilePage = () => {
   useEffect(() => {
      ConsoleGroup('Spawning ClientProfilePage...');
      ConsoleGroupEnd('Ending ClientProfilePage...');
   });
   const navigate = useNavigate();
   const handleLogOut = () => {
      fireBase.auth().signOut();
      navigate('/');
   };
   const {
      setUser,
      userDetails,
      isUserWorker,
      setIsUserWorker,
      firstName,
      setFirstName,
      lastName,
      setLastName,
      email,
      city,
      setCity,
      hourlyWage,
      setHourlyWage,
      aboutMe,
      setAboutMe,
      photoUrl,
      setPhotoUrl,
      category,
      setCategory,
      updateCurrentUser,
      cities,
      categoriesArr,
      getCategoriesServices,
   } = useGlobalContext();
   const [open, setOpen] = useState(false);
   const [isEditable, setIsEditable] = useState(false);

   const handleEdit = () => {
      console.log('I am here');
      setIsEditable(!isEditable);
   };

   // useEffect(() => {
   //    getCategoriesServices();
   // }, []);
   async function deleteAccount() {
      const user = fireBase.auth().currentUser;
      user
         .delete()
         .then(function() {
            console.log('user deleted successfully');
            deleteDoc(doc(db, 'userData', userDetails.uid));
            handleLogOut();
         })
         .catch(function(error) {
            console.log('delete error');
         });
   }

   return (
      <Container maxWidth="md" sx={{margin: '1rem'}}>
         {console.log('Profile city', city)}
         {open && (
            <WarningModal
               setOpen={setOpen}
               title={'???? ?????????????????????????? ???????????? ?????????????? ???????? ???????????????'}
               body={'?????? ???????????? ?????????? ?????????????? ??????????????????????'}
               action={deleteAccount}
               open={open}
            />
         )}
         <Card variant="outlined">
            <CardContent>
               <Typography color="textSecondary" gutterBottom>
                  ???????????? ????????????????????????
               </Typography>
               <Grid container>
                  <Grid item container md={6} direction="column">
                     <TextField
                        sx={{margin: '0.5rem'}}
                        InputLabelProps={{
                           shrink: true,
                        }}
                        id="standard-basic"
                        label="??????:"
                        disabled={!isEditable}
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                        onBlur={() => setIsEditable(false)}
                     />
                     <TextField
                        sx={{margin: '0.5rem'}}
                        InputLabelProps={{
                           shrink: true,
                        }}
                        id="standard-basic"
                        label="??????????????:"
                        disabled={!isEditable}
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                        onBlur={() => setIsEditable(false)}
                     />
                     <TextField
                        sx={{margin: '0.5rem'}}
                        InputLabelProps={{
                           shrink: true,
                        }}
                        id="standard-basic"
                        label="?????????? ??????????:"
                        disabled
                        value={userDetails.email}
                     />
                     <TextField
                        select
                        sx={{margin: '0.5rem'}}
                        InputLabelProps={{
                           shrink: true,
                        }}
                        id="standard-basic"
                        label="??????????:"
                        disabled={!isEditable}
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        onBlur={() => setIsEditable(false)}
                     >
                        {cities.map(city => {
                           return <MenuItem value={city}>{city}</MenuItem>;
                        })}
                     </TextField>
                     <TextField
                        sx={{margin: '0.5rem'}}
                        InputLabelProps={{
                           shrink: true,
                        }}
                        id="standard-basic"
                        label="???????????? ???? ????????????????:"
                        disabled={!isEditable}
                        value={photoUrl}
                        onChange={e => setPhotoUrl(e.target.value)}
                        onBlur={() => setIsEditable(false)}
                     />
                     {isUserWorker && (
                        <>
                           <TextField
                              select
                              sx={{margin: '0.5rem'}}
                              InputLabelProps={{
                                 shrink: true,
                              }}
                              id="standard-basic"
                              label="??????????????????????????:"
                              disabled={!isEditable}
                              value={category}
                              onChange={e => setCategory(e.target.value)}
                              onBlur={() => setIsEditable(false)}
                           >
                              {console.log('profile categories', categoriesArr)}
                              {categoriesArr.map(categoryItem => {
                                 return (
                                    <MenuItem value={categoryItem.id}>
                                       {categoryItem.id}
                                    </MenuItem>
                                 );
                              })}
                           </TextField>
                           <TextField
                              sx={{margin: '0.5rem'}}
                              InputLabelProps={{
                                 shrink: true,
                              }}
                              id="standard-basic"
                              label="?????????????????? ???????????? (?? ??????????):"
                              disabled={!isEditable}
                              value={hourlyWage}
                              onChange={e => setHourlyWage(e.target.value)}
                              onBlur={() => setIsEditable(false)}
                           />
                           <TextField
                              sx={{margin: '0.5rem'}}
                              InputLabelProps={{
                                 shrink: true,
                              }}
                              id="standard-basic"
                              label="?????? ??????:"
                              disabled={!isEditable}
                              value={aboutMe}
                              onChange={e => setAboutMe(e.target.value)}
                              onBlur={() => setIsEditable(false)}
                           />
                           <Box>
                              ?????????????? ????????????:
                              <RenderRating uid={userDetails.uid} />
                           </Box>
                           <Box>?????? ????????????</Box>
                        </>
                     )}
                  </Grid>
                  <Grid item container md={6} direction="column">
                     <Box>
                        <Avatar
                           alt="Avatar Url"
                           src={userDetails.photoUrl}
                           sx={{margin: 'auto', width: 260, height: 260}}
                        />
                     </Box>
                     <Button
                        sx={{margin: '0.5rem 1rem'}}
                        variant="outlined"
                        size="small"
                        onClick={handleEdit}
                     >
                        ?????????????????????????? ????????
                     </Button>
                     <Button
                        color="secondary"
                        sx={{margin: '0.5rem 1rem'}}
                        variant="outlined"
                        size="small"
                        onClick={updateCurrentUser}
                     >
                        ?????????????????? ????????????
                     </Button>
                  </Grid>
               </Grid>
            </CardContent>
            <CardActions>
               {isUserWorker ? (
                  <Button
                     variant="outlined"
                     sx={{margin: '1rem'}}
                     onClick={() => {
                        setIsUserWorker(false);
                     }}
                  >
                     ???????????????? ?????????? ??????????????
                  </Button>
               ) : (
                  <Button
                     sx={{margin: '1rem'}}
                     variant="outlined"
                     onClick={() => {
                        setIsUserWorker(true);
                     }}
                  >
                     ???????????????? ?????????? ??????????????????
                  </Button>
               )}
               <Button
                  sx={{margin: '1rem'}}
                  variant="contained"
                  onClick={() => {
                     handleLogOut();
                     setIsUserWorker(false);
                     setUser('');
                  }}
               >
                  ?????????? ???? ????????????????
               </Button>
               <Button
                  color="error"
                  sx={{margin: '1rem'}}
                  variant="contained"
                  onClick={() => {
                     setOpen(true);
                  }}
               >
                  ?????????????? ??????????????
               </Button>
            </CardActions>
         </Card>
         {/* <Paper
            elevation={5}
            sx={{height: '50vh', padding: '1rem', margin: '2rem'}}
         >
            <h1>?????? ??????????????</h1>
            <ul>
               <li>??????: {firstName}</li>
               <li>??????????????:{lastName}</li>
               <li>?????????? ??????????: {email}</li>
               <li> ??????????: {city}</li>
               {isUserWorker && (
                  <>
                     <li>?????????????????? ???????????? ????{hourlyWage} ????????</li>
                     <li>?????? ??????: {aboutMe}</li>
                     <li>?????? ??????????????</li>
                     <li>???????? ????????????</li>
                  </>
               )}
            </ul>
         </Paper> */}
      </Container>
   );
};

export default ClientProfilePage;
