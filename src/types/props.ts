import ApiRequest from '@api/index';
import { RecommendService } from '@service/recommendService';
import { TodoService } from '@service/todoService';

export interface ApiRequestProps {
  baseURL: string;
  token: string;
}
export type ApiRequestReturn = ReturnType<typeof ApiRequest>;

export interface TodoProviderProps {
  children: JSX.Element;
  todoService: TodoServiceReturn;
}
export type TodoServiceReturn = ReturnType<typeof TodoService>;

export interface SearchProps {
  q: string;
  page?: number;
  limit?: number;
}

export interface RecommendProviderProps {
  children: JSX.Element;
  recommendService: RecommendServiceReturn;
}
export type RecommendServiceReturn = ReturnType<typeof RecommendService>;
