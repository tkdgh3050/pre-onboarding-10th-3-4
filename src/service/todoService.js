export function TodoService(apiRequest) {
  const RESOURCE = '/todos';
  return {
    getTodoList: async () => {
      try {
        const response = await apiRequest.get(`${RESOURCE}`);
        return response.data;
      } catch (error) {
        throw new Error('API getTodoList error');
      }
    },
    createTodo: async data => {
      try {
        const response = await apiRequest.post(`${RESOURCE}`, data);
        return response;
      } catch (error) {
        throw new Error('API createTodo error');
      }
    },
    deleteTodo: async id => {
      try {
        const response = await apiRequest.delete(`${RESOURCE}/${id}`);

        return response;
      } catch (error) {
        throw new Error('API deleteTodo error');
      }
    },
  };
}
