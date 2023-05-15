import { FaTrash } from 'react-icons/fa';
import React, { useCallback } from 'react';
import { ERROR_ALERT_MESSAGE } from '@utils/constants';
import useLoading from '@hooks/useLoading';
import { useTodoHandler } from '@context/TodoContext';
import { TodoCreateData } from '@type/data';

function TodoItem({ id, title }: TodoCreateData) {
  const { isLoading, startLoading, endLoading, Spinner } = useLoading();
  const { removeTodoData } = useTodoHandler();

  const handleRemoveTodo = useCallback(async () => {
    try {
      startLoading();
      if (id) await removeTodoData(id);
      endLoading();
    } catch (error) {
      console.error(error);
      endLoading();
      alert(ERROR_ALERT_MESSAGE);
    }
  }, [id]);

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
