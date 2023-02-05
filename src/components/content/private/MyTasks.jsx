import {
   Button,
   Grid,
   Paper,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
   Typography,
} from '@mui/material';
import {Container} from '@mui/system';
import {collection, getDocs, query, where} from 'firebase/firestore';
import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useGlobalContext} from '../../../contexts/GlobalContextProvider';
import {db} from '../../../helpers/firebase';
import ReviewModal from '../public/reviews/ReviewModal';
const MyTasks = () => {
   const {
      userDetails,
      user,
      setTaskUid,
      isUserWorker,
      setTaskCompleted,
      updateUser,
      taskCount,
      getUsersByQuery,
      usersByQuery,
   } = useGlobalContext();
   const [chatsWithSellers, setChatsWithSellers] = useState([]);
   const [chatsWithBuyers, setChatsWithBuyers] = useState([]);
   const [workerUid, setWorkerUid] = useState([]);
   const navigate = useNavigate();
   useEffect(() => {
      // console.log('userDetails', userDetails);
      getChatsWithBuyers(user);
      getChatsWithSellers(user);
   }, [userDetails]);

   const [addReviewModal, setAddReviewModal] = useState(false);

   async function getChatsWithBuyers(user) {
      console.log('current chat userid', user);
      const arr = [];
      const q = query(
         collection(db, 'tasks'),
         where('buyerUid', '==', user.uid)
      );

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(doc => {
         arr.push([doc.id, doc.data()]);
      });
      setChatsWithBuyers(arr);
   }
   async function getChatsWithSellers(user) {
      const arr = [];
      const q = query(
         collection(db, 'tasks'),
         where('sellerUid', '==', user.uid)
      );

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(doc => {
         arr.push([doc.id, doc.data()]);
      });
      setChatsWithSellers(arr);
   }
   return (
      <Container maxWidth="lg">
         <Paper elevation={5} sx={{padding: '1rem', margin: '2rem'}}>
            {addReviewModal && (
               <ReviewModal
                  addReviewModal={addReviewModal}
                  setAddReviewModal={setAddReviewModal}
                  workerUid={workerUid}
                  setWorkerUid={setWorkerUid}
               />
            )}
            {isUserWorker ? (
               <h1> История предоставленных услуг</h1>
            ) : (
               <h1>История купленных услуг</h1>
            )}
            <TableContainer component={Paper}>
               <Table sx={{minWidth: 650}} aria-label="simple table">
                  <TableHead>
                     <TableRow>
                        <TableCell>Имя</TableCell>
                        <TableCell align="right">Фамилия</TableCell>
                        <TableCell align="right">Почта</TableCell>
                        <TableCell align="right">Описание</TableCell>
                        <TableCell align="right">Действие</TableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {!isUserWorker
                        ? chatsWithBuyers.map(task => (
                             <TableRow
                                key={task[0]}
                                sx={{
                                   '&:last-child td, &:last-child th': {
                                      border: 0,
                                   },
                                }}
                             >
                                <TableCell component="th" scope="row">
                                   {task[1].sellerInfo[0]}
                                </TableCell>
                                <TableCell align="right">
                                   {task[1].sellerInfo[1]}
                                </TableCell>

                                <TableCell align="right">
                                   {task[1].sellerInfo[2]}
                                </TableCell>
                                <TableCell align="right">
                                   {task[1].taskDesc}
                                </TableCell>
                                <TableCell align="right">
                                   <Button
                                      onClick={() => {
                                         setTaskUid(task[0]);
                                         navigate('/chat');
                                      }}
                                      variant="outlined"
                                   >
                                      Чат
                                   </Button>
                                </TableCell>

                                <TableCell align="right">
                                   {task[1].isCompleted ? (
                                      <Button disabled>Завершено</Button>
                                   ) : (
                                      <Button
                                         onClick={() => {
                                            //   console.log(res);
                                            setWorkerUid(task[1].sellerUid);
                                            setAddReviewModal(true);
                                            setTaskCompleted(task[0]);
                                            getUsersByQuery({
                                               uid: task[1].sellerUid,
                                            }).then(result => {
                                               console.log(result);
                                               updateUser(task[1].sellerUid, {
                                                  tasksCompleted:
                                                     +result[0].tasksCompleted +
                                                     1,
                                               });
                                            });
                                            getChatsWithBuyers(user);
                                         }}
                                         variant="contained"
                                      >
                                         Завершить
                                      </Button>
                                   )}
                                </TableCell>
                             </TableRow>
                          ))
                        : chatsWithSellers.map(task => (
                             <TableRow
                                key={task[1].buyerInfo[0]}
                                sx={{
                                   '&:last-child td, &:last-child th': {
                                      border: 0,
                                   },
                                }}
                             >
                                <TableCell component="th" scope="row">
                                   {task[1].buyerInfo[0]}
                                </TableCell>
                                <TableCell align="right">
                                   {task[1].buyerInfo[1]}
                                </TableCell>
                                <TableCell align="right">
                                   {task[1].buyerInfo[2]}
                                </TableCell>
                                <TableCell align="right">
                                   {task[1].taskDesc}
                                </TableCell>
                                <TableCell align="right">
                                   {' '}
                                   <Button
                                      onClick={() => {
                                         setTaskUid(task[0]);
                                         navigate('/chat');
                                      }}
                                      variant="outlined"
                                   >
                                      Чат
                                   </Button>
                                </TableCell>
                             </TableRow>
                          ))}
                  </TableBody>
               </Table>
            </TableContainer>
         </Paper>
      </Container>
   );
};

export default MyTasks;
