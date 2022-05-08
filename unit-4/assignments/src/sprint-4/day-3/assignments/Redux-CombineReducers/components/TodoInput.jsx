import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { getTodoError, getTodoReq, getTodoSuccess } from "../Todo/action";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const TodoInput = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const handleAdd = () => {
    const payload = {
      id: uuid(),
      title,
      status: false,
    };

    fetch("http://localhost:8080/todos", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    }).then(() => {
      dispatch(getTodoReq());
      fetch("http://localhost:8080/todos")
        .then((res) => res.json())
        .then((data) => dispatch(getTodoSuccess(data)))
        .catch(() => dispatch(getTodoError()));
    });
    setTitle("");
  };
  return (
    <div className="flex">
      <Box
        sx={{
          width: 500,
          maxWidth: "90%",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <TextField
          fullWidth
          value={title}
          label="Add Todo"
          onChange={(e) => setTitle(e.target.value)}
          id="fullWidth"
        />
      </Box>
      <Button
        onClick={() => {
          if (title.trim()) {
            handleAdd();
          }
        }}
        variant="outlined"
      >
        Add Todo
      </Button>
    </div>
  );
};

export default TodoInput;
