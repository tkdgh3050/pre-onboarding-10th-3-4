import { TodoCreateData } from '@type/data';
import { ApiRequestReturn } from '@type/props';

export function TodoService(apiRequest: ApiRequestReturn) {
  const RESOURCE = '/todos';
  return {
    getTodoList: async () => {
      try {
        const response = await apiRequest.get(`${RESOURCE}`);
        console.log(response);
        return response.data;
      } catch (error) {
        throw new Error('API getTodoList error');
      }
    },
    createTodo: async (data: TodoCreateData) => {
      try {
        const response = await apiRequest.post(`${RESOURCE}`, data);
        return response;
      } catch (error) {
        throw new Error('API createTodo error');
      }
    },
    deleteTodo: async (id: string) => {
      try {
        const response = await apiRequest.delete(`${RESOURCE}/${id}`);

        return response;
      } catch (error) {
        throw new Error('API deleteTodo error');
      }
    },
  };
}
