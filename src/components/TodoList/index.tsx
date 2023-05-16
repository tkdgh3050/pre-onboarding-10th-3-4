import React from 'react';
import { useTodoState } from '@context/TodoContext';
import TodoItem from './TodoItem';

function TodoList() {
  const { todoListData } = useTodoState();

  return todoListData.length ? (
    <ul className="todo-ul">
      {todoListData.map(({ id, title }) => (
        <TodoItem key={id} id={id} title={title} />
      ))}
    </ul>
  ) : (
    <div className="empty-list">...</div>
  );
}
export default TodoList;
