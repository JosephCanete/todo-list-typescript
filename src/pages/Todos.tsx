import { todoInterface } from "../features/todo";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, markTodo } from "../features/todo";
import { toggleDialog } from "../features/dialog";
import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import FormDialog from "../components/FormDialog";

export default function Todos() {
  const todo = useSelector((state: todoInterface) => state.todo.value);
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [id, setId] = useState<string>("");

  const removeTodoHandler = (itemId: string) => {
    dispatch(removeTodo(itemId));
  };

  const markTodoHandler = (itemId: string, itemStatus: boolean) => {
    dispatch(markTodo({ itemId, itemStatus }));
  };

  interface Props {
    id: string;
    title: string;
    time: string;
  }

  const toggleDialogHandler = (data: Props) => {
    setTitle(data.title);
    setTime(data.time);
    setId(data.id);
    dispatch(toggleDialog("toggle"));
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {todo &&
            todo.map((item, index) => (
              <Grid item xs={4} key={index}>
                <Paper
                  sx={{
                    padding: "1rem",
                    m: "1rem 0",
                  }}
                  elevation={3}
                >
                  <Typography variant="body1" gutterBottom>
                    <b>{`Title: `}</b>
                    <span
                      style={{
                        textDecorationLine: item.status ? "line-through" : "",
                      }}
                    >
                      {item.title}
                    </span>
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    <b>{`Time: `}</b>
                    <span
                      style={{
                        textDecorationLine: item.status ? "line-through" : "",
                      }}
                    >
                      {item.time}
                    </span>
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
                      onClick={() => markTodoHandler(item.id, item.status)}
                    >
                      Mark as Complete
                    </Button>
                    <Button
                      variant="contained"
                      color="warning"
                      onClick={() =>
                        toggleDialogHandler({
                          id: item.id,
                          title: item.title,
                          time: item.time,
                        })
                      }
                    >
                      Update Todo
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => removeTodoHandler(item.id)}
                    >
                      Delete Item
                    </Button>
                  </ButtonGroup>
                </Paper>
              </Grid>
            ))}
        </Grid>
        <FormDialog
          titleDialog="Please update todo"
          contentDialog="Please fill the field for updating the todo"
          title={title}
          time={time}
          id={id}
        />
      </Box>
    </>
  );
}
