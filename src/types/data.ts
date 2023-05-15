import { SearchProps } from './props';

export interface TodoCreateData {
  title: string;
  id?: string;
}

export interface TodoHandlerValue {
  createTodoData: CreateTodoData;
  removeTodoData: RemoveTodoData;
}

export interface TodoStateValue {
  todoListData: TodoCreateData[];
}

export type CreateTodoData = (todo: TodoCreateData) => Promise<void>;
export type RemoveTodoData = (id: string) => Promise<void>;

export interface RecommendData {
  q: string;
  page: number;
  limit: number;
  result: string[];
  qty: number;
  total: number;
}

export interface RecommendStateValue {
  recommendListData: RecommendData[];
}

export interface RecommendHandlerValue {
  getRecommendData: GetRecommendData;
}
export type GetRecommendData = (searchParam: SearchProps) => Promise<void>;
