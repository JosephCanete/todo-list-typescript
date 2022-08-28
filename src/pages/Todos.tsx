import { todoInterface } from "../features/todo";
import { useSelector } from "react-redux";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function Todos() {
  const todo = useSelector((state: todoInterface) => state.todo.value);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {todo &&
            todo.map((item) => (
              <Grid item xs={4}>
                <Paper
                  sx={{
                    padding: "1rem",
                    m: "1rem 0",
                  }}
                  elevation={3}
                >
                  <Typography variant="body1" gutterBottom>
                    <b>{`Title: `}</b>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    <b>{`Time: `}</b> {item.time}
                  </Typography>

                  <Typography
                    variant="body1"
                    gutterBottom
                    sx={{
                      color: item.status ? "#2e7d32" : "#d32f2f",
                    }}
                  >
                    <b style={{ color: "black" }}>{`Status: `}</b>
                    <b>{item.status ? "Completed" : "Not yet done"}</b>
                  </Typography>

                  <ButtonGroup
                    variant="contained"
                    aria-label="outlined primary button group"
                  >
                    <Button
                      variant="contained"
                      color="success"
                      onClick={() => console.log(todo)}
                    >
                      Mark as Complete
                    </Button>
                    <Button variant="contained" color="error">
                      Delete Item
                    </Button>
                  </ButtonGroup>
                </Paper>
              </Grid>
            ))}
        </Grid>
      </Box>
    </>
  );
}
