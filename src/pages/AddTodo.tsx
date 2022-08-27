import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo";
import React, { useState, useRef } from "react";

export default function AddTodo() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState<string>("");
  const [time, setTime] = useState<string>("");

  const addTodoHandler = () => {
    if (!title) return console.log("Title field is undefined", title);
    if (!time) return console.log("Time field is undefined", time);

    dispatch(addTodo({ title: title, time: time, state: false }));
    console.log("Data has sent into redux toolkit, clearing now the fields");
    setTitle("");
    setTime("");
  };

  const inputOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.currentTarget.id) {
      case "title":
        setTitle(event.currentTarget.value);
        console.log("Done updating title state");
        break;
      case "time":
        setTime(event.currentTarget.value);
        console.log("Done updating time state");
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
        Add Item
      </Button>
    </Container>
  );
}
