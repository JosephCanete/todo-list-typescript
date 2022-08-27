import { todoInterface } from "../features/todo";
import { useSelector } from "react-redux";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

export default function Todos() {
  const todo = useSelector((state: todoInterface) => state.todo.value);
  console.log(todo);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Paper
              variant="outlined"
              sx={{
                padding: "1rem",
                m: "1rem 0",
              }}
              elevation={3}
            >
              <Typography variant="body1" gutterBottom>
                <b>{`Title: `}</b>
                {todo.title}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <b>{`Time: `}</b> {todo.time}
              </Typography>

              <Typography variant="body1" gutterBottom>
                <b>{`Status: `}</b>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{
                    color: todo.status ? "green" : "red",
                    display: "inline",
                  }}
                >
                  {todo.status ? "Completed" : "Not yet done"}
                </Typography>
              </Typography>
              <Button variant="contained" color="error">
                Delete Item
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
