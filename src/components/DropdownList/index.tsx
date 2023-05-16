import React from 'react';
import { useRecommendHandler, useRecommendState } from '@context/RecommendContext';
import useThrottle from '@hooks/useThrottle';
import { ERROR_ALERT_MESSAGE, SEARCH_LIMIT_SIZE, THROTTLE_LIMIT_TIME } from '@utils/constants';
import useLoading from '@hooks/useLoading';
import DropdownItem from './DropdownItem';
import styles from './DropdownList.module.css';

const ALLOW_SCROLL_END = 10;

function DropdownList({ clickDropdownList }: { clickDropdownList: (text: string) => void }) {
  const { isLoading, startLoading, endLoading, Spinner } = useLoading();
  const { recommendResponse, recommendListData } = useRecommendState();
  const { getRecommendData } = useRecommendHandler();
  const { q, page, total } = recommendResponse;
  const onClickDropdownList = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!(e.target instanceof HTMLLIElement)) {
      return;
    }
    if (e.target.dataset.title) clickDropdownList(e.target.dataset.title);
  };

  const getMoreCommendData = async () => {
    try {
      startLoading();
      await getRecommendData({
        q,
        page: page + 1,
        limit: SEARCH_LIMIT_SIZE,
      });
    } catch (error) {
      console.error(error);
      alert(ERROR_ALERT_MESSAGE);
    } finally {
      endLoading();
    }
  };

  const onScrollDropdown = async (e: React.UIEvent<HTMLDivElement>) => {
    if (recommendListData.length >= total) return;
    const target = e.target as HTMLDivElement;
    const { scrollHeight, scrollTop, clientHeight } = target;
    if (clientHeight + scrollTop >= scrollHeight - ALLOW_SCROLL_END && !isLoading) {
      await getMoreCommendData();
    }
  };
  const throttleScroll = useThrottle<[React.UIEvent<HTMLDivElement>]>(onScrollDropdown, THROTTLE_LIMIT_TIME);

  return recommendListData.length ? (
    <div className={styles['dropdown-container']} onScroll={throttleScroll}>
      <ul className={styles['dropdown-ul']} onClick={onClickDropdownList} role="presentation">
        {recommendListData.map((title, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <DropdownItem key={idx + title} title={title} query={q} />
        ))}
        {recommendListData.length < total ? (
          isLoading ? (
            <div className={styles['dropdown-endline']}>{Spinner}</div>
          ) : (
            <div className={styles['dropdown-endline']}>
              <img className={styles['more-icon']} src="/images/more.svg" alt="more-icon" />
            </div>
          )
        ) : null}
      </ul>
    </div>
  ) : null;
}

export default DropdownList;
