import { FaTrash } from 'react-icons/fa';
import React, { useCallback } from 'react';
import { deleteTodo } from '@api/todo';
import { ERROR_ALERT_MESSAGE } from '@utils/constants';
import useLoading from '@hooks/useLoading';

function TodoItem({ id, title, setTodos }) {
  const { isLoading, startLoading, endLoading, Spinner } = useLoading();

  const handleRemoveTodo = useCallback(async () => {
    try {
      startLoading();
      await deleteTodo(id);
      endLoading();
      setTodos(prev => prev.filter(item => item.id !== id));
    } catch (error) {
      console.error(error);
      endLoading();
      alert(ERROR_ALERT_MESSAGE);
    }
  }, [id, setTodos]);

  return (
    <li className="item">
      <span>{title}</span>
      <div className="item-option">
        {!isLoading ? (
          <button type="button" onClick={handleRemoveTodo}>
            <FaTrash className="btn-trash" />
          </button>
        ) : (
          Spinner
        )}
      </div>
    </li>
  );
}

export default TodoItem;
