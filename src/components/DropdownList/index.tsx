import React from 'react';
import { useRecommendState } from '@context/RecommendContext';
import DropdownItem from './DropdownItem';

function DropdownList() {
  const { recommendResponse, recommendListData } = useRecommendState();
  const { q } = recommendResponse;
  return (
    <div className="dropdown-container">
      <ul className="dropdown-ul">
        {recommendListData.length ? (
          recommendListData.map(title => <DropdownItem key={title} title={title} query={q} />)
        ) : (
          <div>추천 검색 결과가 없습니다.</div>
        )}
      </ul>
    </div>
  );
}

export default DropdownList;
