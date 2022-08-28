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

interface Props {
  titleDialog: string;
  contentDialog: string;
}

export default function FormDialog({ titleDialog, contentDialog }: Props) {
  const dialogState = useSelector(
    (state: dialogInterface) => state.dialog.value.dialog
  );
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(toggleDialog("toggle"));
  };

  return (
    <>
      <Dialog open={dialogState} onClose={handleClose}>
        <DialogTitle>{titleDialog}</DialogTitle>
        <DialogContent>
          <DialogContentText>{contentDialog}</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Time"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error">
            Cancel
          </Button>
          <Button onClick={handleClose} color="success">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
