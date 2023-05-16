import React from 'react';
import { useTodoState } from '@context/TodoContext';
import TodoItem from './TodoItem';
import styles from './TodoList.module.css';

function TodoList() {
  const { todoListData } = useTodoState();

  return todoListData.length ? (
    <ul className={styles['todo-ul']}>
      {todoListData.map(({ id, title }) => (
        <TodoItem key={id} id={id} title={title} />
      ))}
    </ul>
  ) : (
    <div className={styles['empty-list']}>...</div>
  );
}
export default TodoList;
