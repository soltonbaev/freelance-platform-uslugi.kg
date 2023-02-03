import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function WarningModal({title, body, action, setOpen, open}) {
   const handleClose = () => {
      setOpen(false);
      action();
   };

   return (
      <div>
         {/* <Button variant="outlined" onClick={handleClickOpen}>
            Open alert dialog
         </Button> */}
         <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
         >
            <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
            <DialogContent>
               <DialogContentText id="alert-dialog-description">
                  {body}
               </DialogContentText>
            </DialogContent>
            <DialogActions>
               <Button onClick={handleClose}>Отменить</Button>
               <Button onClick={handleClose} autoFocus>
                  Подтвердить
               </Button>
            </DialogActions>
         </Dialog>
      </div>
   );
}
