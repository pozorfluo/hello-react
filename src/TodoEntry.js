import React from 'react';
import PropTypes from 'prop-types';

export const TodoEntry = (props) => {
  const formatted_list = props.list.map((entry, i) => {
    return (
      <li className="item" key={entry[0]}>
        {entry[0]} : {entry[1]}
        <button className="x-button" onClick={() => props.onDelete(i)}>X</button>
      </li>
    );
  });

  return (
    <ul className="sidebar" style={{ listStyleType: 'none' }}>
      {formatted_list.reverse()}
    </ul>
  );
};

TodoEntry.propTypes = {
  list: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
