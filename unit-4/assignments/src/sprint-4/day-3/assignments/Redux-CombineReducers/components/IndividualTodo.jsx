import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getTodoError, toggeleStatus } from "../Todo/action";
import Switch from "@mui/material/Switch";
import Tooltip from "@mui/material/Tooltip";

const IndividualTodo = () => {
  const [todo, setTodo] = useState({});
  const [completed, setCompleted] = useState(false);
  const [checked, setChecked] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`http://localhost:8080/todos/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTodo(data);
        setCompleted(data.status);
        setChecked(data.status);
      })
      .catch(() => dispatch(getTodoError()));
  }, [dispatch]);

  const handleChange = () => {
    setChecked(!checked);
    const payload = {
      ...todo,
      status: !completed,
    };
    toggeleStatus(payload, id, dispatch);
  };

  return (
    <div className="ind_todo">
      <h1
        className="ind_title"
        style={
          completed
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
      >
        {todo.title}
      </h1>
      <Tooltip title={completed ? "completed" : "Mark as complete"}>
        <Switch
          checked={checked}
          onChange={() => {
            setCompleted(!completed);
            handleChange();
          }}
        />
      </Tooltip>
    </div>
  );
};

export default IndividualTodo;
