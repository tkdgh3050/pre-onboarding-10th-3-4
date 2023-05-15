import React from 'react';

function DropdownItem({ title, query }: { title: string; query: string }) {
  const parts = title.split(new RegExp(`(${query})`, 'gi'));
  console.log(parts);
  return (
    <li className="dropdown-item">
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
