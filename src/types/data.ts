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
