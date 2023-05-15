import { RecommendData, RecommendHandlerValue, RecommendStateValue } from '@type/data';
import { RecommendProviderProps, SearchProps } from '@type/props';
import React, { createContext, useContext, useState, useMemo } from 'react';

const defaultRecommendContextState: RecommendStateValue = {
  recommendListData: [{ q: '', page: 0, limit: 0, result: [], qty: 0, total: 0 }],
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
  const [recommendListData, setRecommendListData] = useState<RecommendData[]>([]);

  const getRecommendData = async (searchParam: SearchProps) => {
    console.log('getRecommendData param: ', searchParam);
    if (searchParam.q === '') return;
    const { data } = await recommendService.getSearch(searchParam);
    console.log('getRecommendData data: ', data);
    setRecommendListData(data);
  };

  const stateValue = useMemo(
    () => ({
      recommendListData,
    }),
    [recommendListData]
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
