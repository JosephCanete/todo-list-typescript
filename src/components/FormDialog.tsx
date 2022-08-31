import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import "./FormDialog.scss";
import { useSelector, useDispatch } from "react-redux";
import { toggleDialog, dialogInterface } from "../features/dialog";
import React, { useState, useEffect } from "react";
import { alterTodo } from "../features/todo";

interface Props {
  titleDialog: string;
  contentDialog: string;
  title: string;
  time: string;
  id: string;
}

export default function FormDialog({
  titleDialog,
  contentDialog,
  title,
  time,
  id,
}: Props) {
  const dispatch = useDispatch();
  const dialogState = useSelector(
    (state: dialogInterface) => state.dialog.value.dialog
  );
  const [uuid, setUuid] = useState<string>("");
  const [dialogTitle, setDialogTitle] = useState<string>("");
  const [dialogTime, setDialogTime] = useState<string>("");

  const handleClose = () => {
    setTimeout(() => {
      dispatch(toggleDialog("toggle"));
    }, 250);
  };

  const handleSubmit = () => {
    if (!dialogTitle || !dialogTime) {
      return alert("Empty fields are not allowed");
    }

    setTimeout(() => {
      dispatch(alterTodo({ id: uuid, title: dialogTitle, time: dialogTime }));
      dispatch(toggleDialog("toggle"));
    }, 250);
  };

  useEffect(() => {
    console.log("cloning data through useEffect");
    title && setDialogTitle(title);
    time && setDialogTime(time);
    id && setUuid(id);
  }, [dialogState]);

  return (
    <>
      <Dialog open={dialogState} onClose={handleClose}>
        <DialogTitle>{titleDialog}</DialogTitle>
        <DialogContent>
          <DialogContentText>{contentDialog}</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="tile"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
            value={dialogTitle}
            onChange={(event) => setDialogTitle(event.currentTarget.value)}
            onBlur={(event) => setDialogTitle(event.currentTarget.value)}
          />
          <TextField
            margin="dense"
            id="time"
            label="Time"
            type="text"
            fullWidth
            variant="standard"
            value={dialogTime}
            onChange={(event) => setDialogTime(event.currentTarget.value)}
            onBlur={(event) => setDialogTime(event.currentTarget.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="success">
            Update Todo
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
