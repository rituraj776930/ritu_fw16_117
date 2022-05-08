import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { deleteTodo } from "../Todo/action";
import { useDispatch } from "react-redux";
import Tooltip from "@mui/material/Tooltip";

const FlexDiv = styled.div`
  display: flex;
  margin-bottom: 16px;
  width: 600px;
  border-radius: 4px;
  padding: 14px 20px;
  border: 1px solid #bbb;
  justify-content: space-between;
`;

const Todo = ({ id, title, status }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleDelete = () => {
    deleteTodo(id, dispatch);
  };

  return (
    <>
      <FlexDiv>
        <h3
          className="title"
          onClick={() => navigate(`/todo/${id}`)}
          style={
            status
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
          {title}
        </h3>
        <Tooltip title="Delete">
          <DeleteIcon className="deleteBtn" onClick={handleDelete} />
        </Tooltip>
      </FlexDiv>
    </>
  );
};

export default Todo;
