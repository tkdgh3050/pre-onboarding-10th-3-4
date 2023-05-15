import ApiRequest from '@api/index';
import { TodoService } from '@service/todoService';

export interface ApiRequestProps {
  baseURL: string;
  token: string;
}

export interface TodoProviderProps {
  children: JSX.Element;
  todoService: TodoServiceReturn;
}

export type ApiRequestReturn = ReturnType<typeof ApiRequest>;
export type TodoServiceReturn = ReturnType<typeof TodoService>;
