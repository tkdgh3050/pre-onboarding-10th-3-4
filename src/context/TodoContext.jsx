import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';

const TodoContextState = createContext(null);
const TodoContextHandler = createContext(null);
export const useTodoState = () => useContext(TodoContextState);
export const useTodoHandler = () => useContext(TodoContextHandler);

export function TodoProvider({ children, todoService }) {
  const [todoListData, setTodoListData] = useState([]);

  useEffect(() => {
    const getTodoList = async () => {
      const data = await todoService.getTodoList();
      setTodoListData(data);
    };
    getTodoList();
  }, [todoService, setTodoListData]);

  const createTodoData = async todo => {
    const { data } = await todoService.createTodo(todo);
    if (data) {
      return setTodoListData(prev => [...prev, data]);
    }
  };

  const removeTodoData = async id => {
    await todoService.deleteTodo(id);
    setTodoListData(prev => prev.filter(item => item.id !== id));
  };

  const stateValue = useMemo(
    () => ({
      todoListData,
    }),
    [todoListData]
  );

  const handlerValue = useMemo(
    () => ({
      createTodoData,
      removeTodoData,
    }),
    [createTodoData, removeTodoData]
  );

  return (
    <TodoContextHandler.Provider value={handlerValue}>
      <TodoContextState.Provider value={stateValue}>{children}</TodoContextState.Provider>
    </TodoContextHandler.Provider>
  );
}
