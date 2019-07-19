import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeInput, insert, toggleCheck, remove } from "../Modules/todos";
import TodoList from "./../Components/TodoList";

const TodoListContainer = () => {
  const dispatch = useDispatch();

  const { input, todos } = useSelector(state => state.todos, []);

  const onChangeInput = useCallback(
    inputValue => dispatch(changeInput(inputValue)),
    [dispatch]
  );
  const onInsert = useCallback(text => dispatch(insert(text)), [dispatch]);
  const onToggle = useCallback(id => dispatch(toggleCheck(id)), [dispatch]);
  const onRemove = useCallback(id => dispatch(remove(id)), [dispatch]);

  const onChange = useCallback(e => onChangeInput(e.target.value), [
    onChangeInput
  ]);
  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      onInsert(input);
      onChangeInput("");
    },
    [input, onChangeInput, onInsert]
  );

  return (
    <TodoList
      input={input}
      todos={todos}
      onChange={onChange}
      onSubmit={onSubmit}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  );
};

export default TodoListContainer;