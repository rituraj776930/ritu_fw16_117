export const GET_TODO_REQ = "GET_TODO_REQ";
export const GET_TODO_ERROR = "GET_TODO_ERROR";
export const GET_TODO_SUCCESS = "GET_TODO_SUCCESS";
export const DELETE_TODO = "DELETE_TODO";

export const getTodoReq = () => ({
  type: GET_TODO_REQ,
});

export const getTodoError = () => ({
  type: GET_TODO_ERROR,
});

export const getTodoSuccess = (payload) => ({
  type: GET_TODO_SUCCESS,
  payload,
});

export const toggeleStatus = (payload, id, dispatch) => {
  fetch(`http://localhost:8080/todos/${id}`, {
    method: "PATCH",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .catch(() => dispatch(getTodoError()));
};

export const deleteTodo = (id, dispatch) => {
  fetch(`http://localhost:8080/todos/${id}`, {
    method: "DELETE",
  });
  dispatch({
    type: DELETE_TODO,
    payload: id,
  });
};
