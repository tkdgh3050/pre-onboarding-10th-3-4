import { RecommendData, RecommendHandlerValue, RecommendStateValue } from '@type/data';
import { RecommendProviderProps, SearchProps } from '@type/props';
import React, { createContext, useContext, useState, useMemo } from 'react';

const defaultResponse = { q: '', page: 0, limit: 0, result: [], qty: 0, total: 0 };
const defaultRecommendContextState: RecommendStateValue = {
  recommendResponse: defaultResponse,
  recommendListData: [''],
};

const defaultRecommendContextHandler: RecommendHandlerValue = {
  getRecommendData: () =>
    new Promise(resolve => {
      resolve();
    }),
};

const RecommendContextState = createContext<RecommendStateValue>(defaultRecommendContextState);
const RecommendContextHandler = createContext<RecommendHandlerValue>(defaultRecommendContextHandler);
export const useRecommendState = () => useContext(RecommendContextState);
export const useRecommendHandler = () => useContext(RecommendContextHandler);

export function RecommendProvider({ children, recommendService }: RecommendProviderProps) {
  const [recommendResponse, setRecommendResponse] = useState<RecommendData>(defaultResponse);
  const [recommendListData, setRecommendListData] = useState<string[]>([]);

  const getRecommendData = async (searchParam: SearchProps) => {
    console.log('getRecommendData param: ', searchParam);
    if (searchParam.q === '') return;
    const { data } = await recommendService.getSearch(searchParam);
    console.log('getRecommendData data: ', data);
    setRecommendResponse(data);
    setRecommendListData(data.result);
  };

  const stateValue = useMemo(
    () => ({
      recommendResponse,
      recommendListData,
    }),
    [recommendResponse, recommendListData]
  );

  const handlerValue = useMemo(
    () => ({
      getRecommendData,
    }),
    [getRecommendData]
  );

  return (
    <RecommendContextHandler.Provider value={handlerValue}>
      <RecommendContextState.Provider value={stateValue}>{children}</RecommendContextState.Provider>
    </RecommendContextHandler.Provider>
  );
}
