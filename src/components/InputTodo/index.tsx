import { FaSearch } from 'react-icons/fa';
import React, { useCallback, useEffect, useState } from 'react';
import useFocus from '@hooks/useFocus';
import { DEBOUNCE_LIMIT_TIME, ERROR_ALERT_MESSAGE, SEARCH_LIMIT_SIZE } from '@utils/constants';
import useLoading from '@hooks/useLoading';
import { useTodoHandler } from '@context/TodoContext';
import useDebounce from '@hooks/useDebounce';
import { useRecommendHandler } from '@context/RecommendContext';

function InputTodo() {
  const [inputText, setInputText] = useState('');
  const { isLoading, startLoading, endLoading, Spinner } = useLoading();
  const { ref, setFocus } = useFocus();
  const { createTodoData } = useTodoHandler();
  // const {recommendListData} = useRecommendState();
  const { getRecommendData } = useRecommendHandler();
  const getDebounceResult = useDebounce(async text => {
    try {
      await getRecommendData({ q: text, page: 1, limit: SEARCH_LIMIT_SIZE });
    } catch (error) {
      console.error(error);
      alert(ERROR_ALERT_MESSAGE);
    }
  }, DEBOUNCE_LIMIT_TIME);

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
    getDebounceResult(e.target.value);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <FaSearch className="icon-search" />
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
          {/* <FaPlusCircle className="btn-plus" /> */}
        </button>
      ) : (
        Spinner
      )}
    </form>
  );
}

export default InputTodo;
