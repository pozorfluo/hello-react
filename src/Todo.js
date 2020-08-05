import React, { useState } from 'react';
import { TodoEntry } from './TodoEntry';

export const Todo = () => {
  const [list, setList] = useState([]);

  const count = list.length;

  return (
    <React.Fragment>
      <div>
        <p>{count}</p>
        <button
          onClick={() => {
            const id = count ? list[count - 1][0] + 1 : 0;
            setList([...list, [id, count]]);
          }}
        >
          Add Count to list
        </button>
        <form
          onSubmit={(event) => {
            const entry = event.target.new_entry;
            if (entry.value !== null && entry.value !== '') {
              const id = count ? list[count - 1][0] + 1 : 0;
              setList([...list, [id, entry.value]]);
              entry.value = '';
            }
            event.preventDefault();
          }}
        >
          <input type="text" name="new_entry" />
        </form>
      </div>
      <TodoEntry 
        list={list}
        onDelete={(i) => {
          const new_list = [...list];
          new_list.splice(i, 1);
          setList(new_list);
        }}
      />
    </React.Fragment>
  );
};
