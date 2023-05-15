import { FaPlusCircle } from 'react-icons/fa';
import React, { useCallback, useEffect, useState } from 'react';
import useFocus from '@hooks/useFocus';
import { ERROR_ALERT_MESSAGE } from '@utils/constants';
import useLoading from '@hooks/useLoading';
import { useTodoHandler } from '@context/TodoContext';

function InputTodo() {
  const [inputText, setInputText] = useState('');
  const { isLoading, startLoading, endLoading, Spinner } = useLoading();
  const { ref, setFocus } = useFocus();
  const { createTodoData } = useTodoHandler();

  useEffect(() => {
    setFocus();
  }, [setFocus]);

  const handleSubmit = useCallback(
    async e => {
      try {
        e.preventDefault();
        startLoading();

        const trimmed = inputText.trim();
        if (!trimmed) {
          return alert('Please write something');
        }

        const newItem = { title: trimmed };
        await createTodoData(newItem);
      } catch (error) {
        console.error(error);
        alert(ERROR_ALERT_MESSAGE);
      } finally {
        setInputText('');
        endLoading();
      }
    },
    [inputText]
  );

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        className="input-text"
        placeholder="Add new todo..."
        ref={ref}
        value={inputText}
        onChange={onChangeInput}
        disabled={isLoading}
      />
      {!isLoading ? (
        <button className="input-submit" type="submit">
          <FaPlusCircle className="btn-plus" />
        </button>
      ) : (
        Spinner
      )}
    </form>
  );
}

export default InputTodo;
