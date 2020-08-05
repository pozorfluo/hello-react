import React from 'react';
import PropTypes from 'prop-types';

export const Greeting = (props) => {
  const formatted_list = props.list.map((entry, i) => {
    return (
      <li key={entry[0]}>
        {entry[0]} : {entry[1]}
        <button onClick={() => props.onDelete(i)}>X</button>
      </li>
    );
  });

  return <ul style={{ listStyleType: 'none' }}>{formatted_list.reverse()}</ul>;
};

Greeting.propTypes = {
  list: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
