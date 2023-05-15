import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import ApiRequest from './api';
import App from './App';
import { TodoProvider } from './context/TodoContext';
import { TodoService } from './service/todoService';

const apiRequest = ApiRequest(process.env.REACT_APP_API_URL, process.env.REACT_APP_TOKEN);
const todoService = TodoService(apiRequest);

ReactDOM.render(
  <StrictMode>
    <TodoProvider todoService={todoService}>
      <App />
    </TodoProvider>
  </StrictMode>,
  document.getElementById('root')
);
