import React, { useEffect, useState } from 'react';
import { getTodoList } from '@api/todo';
import Header from '@components/Header';
import InputTodo from '@components/InputTodo';
import TodoList from '@components/TodoList';

function Main() {
  const [todoListData, setTodoListData] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await getTodoList();
      setTodoListData(data || []);
    })();
  }, []);

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo setTodos={setTodoListData} />
        <TodoList todos={todoListData} setTodos={setTodoListData} />
      </div>
    </div>
  );
}

export default Main;
