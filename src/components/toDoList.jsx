import React, { useState } from "react";

function TodoList(props) {
  const [line, setLine] = useState(false);

  function deleteItem() {}

  return <li onClick={() => props.onChecked(props.id)}>{props.todoItem}</li>;
}
export default TodoList;
