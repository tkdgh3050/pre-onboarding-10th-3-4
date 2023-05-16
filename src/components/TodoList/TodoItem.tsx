import { FaTrash } from 'react-icons/fa';
import React, { useCallback } from 'react';
import { ERROR_ALERT_MESSAGE } from '@utils/constants';
import useLoading from '@hooks/useLoading';
import { useTodoHandler } from '@context/TodoContext';
import { TodoCreateData } from '@type/data';
import styles from './TodoList.module.css';

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
    <li className={styles.item}>
      <span>{title}</span>
      <div className={styles['item-option']}>
        {!isLoading ? (
          <button type="button" onClick={handleRemoveTodo}>
            <FaTrash className={styles['btn-trash']} />
          </button>
        ) : (
          Spinner
        )}
      </div>
    </li>
  );
}

export default TodoItem;
