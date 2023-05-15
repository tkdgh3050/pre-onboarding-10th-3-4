import { ApiRequestReturn, SearchProps } from '@type/props';

export function RecommendService(apiRequest: ApiRequestReturn) {
  const RESOURCE = '/search';
  return {
    getSearch: async ({ q, page = 1, limit = 10 }: SearchProps) => {
      try {
        const response = await apiRequest.get(`${RESOURCE}`, { params: { q, page, limit } });
        return response;
      } catch (error) {
        throw new Error('API getSearch error');
      }
    },
  };
}
