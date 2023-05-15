import React from 'react';
import Header from '@components/Header';
import InputTodo from '@components/InputTodo';
import TodoList from '@components/TodoList';

function Main() {
  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo />
        <TodoList />
      </div>
    </div>
  );
}

export default Main;
