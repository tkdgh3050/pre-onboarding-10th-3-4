import React from 'react';

function DropdownItem({ title, query }: { title: string; query: string }) {
  const parts = title.split(new RegExp(`(${query})`, 'gi'));
  return (
    <li className="dropdown-item" data-title={title}>
      {parts.map(part =>
        part.toLowerCase() === query.toLowerCase() ? (
          <span className="item-highlight" key={title}>
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
