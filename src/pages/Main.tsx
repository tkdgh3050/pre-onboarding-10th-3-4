import React from 'react';
import Header from '@components/Header';
import InputTodo from '@components/InputTodo';
import TodoList from '@components/TodoList';
// import DropdownList from '@components/DropdownList';

function Main() {
  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo />
        {/* <DropdownList /> */}
        <TodoList />
      </div>
    </div>
  );
}

export default Main;
