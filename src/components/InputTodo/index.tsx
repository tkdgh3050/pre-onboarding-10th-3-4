import { FaSearch } from 'react-icons/fa';
import React, { useCallback, useState, useEffect } from 'react';
import useFocus from '@hooks/useFocus';
import { DEBOUNCE_LIMIT_TIME, ERROR_ALERT_MESSAGE, SEARCH_LIMIT_SIZE } from '@utils/constants';
import useLoading from '@hooks/useLoading';
import { useTodoHandler } from '@context/TodoContext';
import useDebounce from '@hooks/useDebounce';
import { useRecommendHandler } from '@context/RecommendContext';
import DropdownList from '@components/DropdownList';

function InputTodo() {
  const [inputText, setInputText] = useState('');
  const { isLoading, startLoading, endLoading, Spinner } = useLoading();
  const { ref, setFocus } = useFocus();
  const { createTodoData } = useTodoHandler();
  const { getRecommendData, clearRecommendData } = useRecommendHandler();
  const getDebounceResult = useDebounce(async text => {
    try {
      startLoading();
      await getRecommendData({ q: text, page: 1, limit: SEARCH_LIMIT_SIZE });
    } catch (error) {
      console.error(error);
      alert(ERROR_ALERT_MESSAGE);
    } finally {
      endLoading();
    }
  }, DEBOUNCE_LIMIT_TIME);

  useEffect(() => {
    setFocus();
  }, [setFocus]);

  const createTodo = async (text: string) => {
    try {
      startLoading();

      const trimmed = text.trim();
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
      clearRecommendData();
      endLoading();
    }
  };

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault();
      await createTodo(inputText);
    },
    [inputText]
  );

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
    getDebounceResult(e.target.value);
  };

  const clickDropdownList = async (text: string) => {
    await createTodo(text);
  };

  return (
    <>
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
      <DropdownList clickDropdownList={clickDropdownList} />
    </>
  );
}

export default InputTodo;
