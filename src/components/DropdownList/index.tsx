import React from 'react';
import { useRecommendState } from '@context/RecommendContext';
import DropdownItem from './DropdownItem';

function DropdownList({ clickDropdownList }: { clickDropdownList: (text: string) => void }) {
  const { recommendResponse, recommendListData } = useRecommendState();
  const { q } = recommendResponse;
  const onClickDropdownList = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!(e.target instanceof HTMLLIElement)) {
      return;
    }
    if (e.target.dataset.title) clickDropdownList(e.target.dataset.title);
  };
  return recommendListData.length ? (
    <div className="dropdown-container">
      <ul className="dropdown-ul" onClick={onClickDropdownList} role="presentation">
        {recommendListData.map(title => (
          <DropdownItem key={title} title={title} query={q} />
        ))}
      </ul>
    </div>
  ) : null;
}

export default DropdownList;
