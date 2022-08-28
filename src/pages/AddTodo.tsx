import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function AddTodo() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState<string>("");
  const [time, setTime] = useState<string>("");

  const addTodoHandler = () => {
    if (!title) return console.log("Title field is undefined", title);
    if (!time) return console.log("Time field is undefined", time);

    dispatch(addTodo({ id: uuidv4(), title: title, time: time, state: false }));
    setTitle("");
    setTime("");
  };

  const inputOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.currentTarget.id) {
      case "title":
        setTitle(event.currentTarget.value);
        break;
      case "time":
        setTime(event.currentTarget.value);
        break;
      default: {
        //wont happening
      }
    }
  };

  return (
    <Container maxWidth="xl">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: "0.5rem", width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="title"
          label="Title"
          value={title}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            inputOnChangeHandler(event)
          }
        />
        <TextField
          id="time"
          label="Time"
          value={time}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            inputOnChangeHandler(event)
          }
        />
      </Box>
      <Button variant="contained" color="success" onClick={addTodoHandler}>
        Add Todo
      </Button>
    </Container>
  );
}
