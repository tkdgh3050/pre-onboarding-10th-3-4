import { TodoHandlerValue, TodoStateValue, TodoCreateData } from '@type/data';
import { TodoProviderProps } from '@type/props';
import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';

const defaultTodoContextState: TodoStateValue = {
  todoListData: [{ title: '', id: '' }],
};

const defaultTodoContextHandler: TodoHandlerValue = {
  createTodoData: () =>
    new Promise(resolve => {
      resolve();
    }),
  removeTodoData: () =>
    new Promise(resolve => {
      resolve();
    }),
};

const TodoContextState = createContext<TodoStateValue>(defaultTodoContextState);
const TodoContextHandler = createContext<TodoHandlerValue>(defaultTodoContextHandler);
export const useTodoState = () => useContext(TodoContextState);
export const useTodoHandler = () => useContext(TodoContextHandler);

export function TodoProvider({ children, todoService }: TodoProviderProps) {
  const [todoListData, setTodoListData] = useState<TodoCreateData[]>([]);

  useEffect(() => {
    const getTodoList = async () => {
      const { data } = await todoService.getTodoList();
      setTodoListData(data);
    };
    getTodoList();
  }, [todoService, setTodoListData]);

  const createTodoData = async (todo: TodoCreateData) => {
    const { data } = await todoService.createTodo(todo);
    if (data) {
      setTodoListData(prev => [...prev, data]);
    }
  };

  const removeTodoData = async (id: string) => {
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
