import React from 'react';
import styles from './DropdownList.module.css';

function DropdownItem({ title, query }: { title: string; query: string }) {
  const parts = title.split(new RegExp(`(${query})`, 'gi'));
  return (
    <li className={styles['dropdown-item']} data-title={title}>
      {parts.map(part =>
        part.toLowerCase() === query.toLowerCase() ? (
          <span className={styles['item-highlight']} key={title}>
            {part}
          </span>
        ) : (
          part
        )
      )}
    </li>
  );
}

export default DropdownItem;
