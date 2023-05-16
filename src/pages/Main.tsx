import React from 'react';
import Header from '@components/Header';
import InputTodo from '@components/InputTodo';
import TodoList from '@components/TodoList';
import styles from './Main.module.css';

function Main() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <Header />
        <InputTodo />
        <TodoList />
      </div>
    </div>
  );
}

export default Main;
