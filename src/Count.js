import React, { useState } from 'react';
import { Greeting } from './Greeting';

export const Count = () => {
  const [id, setId] = useState(0);
  const [count, setCount] = useState(0);
  const [list, setList] = useState([]);

  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => {
          setList([...list, [id, count]]);
          setCount(count + 1);
          setId(id + 1);
        }
      }
      >
        greet me
      </button>
      <form
        onSubmit={(event) => {
          const entry = event.target.new_entry;
          if (entry.value !== null && entry.value !== '') {
            setCount(count + 1);
            setId(id + 1);
            setList([...list, [id, entry.value]]);
            entry.value = '';
          }
          event.preventDefault();
        }}
      >
        <input type="text" name="new_entry" />
      </form>
      <Greeting
        list={list}
        onDelete={(i) => {
          setCount(count - 1);
          const new_list = [...list];
          new_list.splice(i, 1);
          setList(new_list);
        }}
      />
    </div>
  );
};

// export {Count};
