import React, { useState, useEffect } from 'react';
import { Greeting } from './Greeting';

export const Count = () => {
  const [count, setCount] = useState(0);
  const [list, setList] = useState([]);
  // useEffect(() => {
  //     console.log(props);
  //     // setList((list) => [...list, props.count]);
  // });
  //   useEffect(() => {
  //     for (let i = 0; i < 10; i++) {
  //       setCount(i);
  //       console.log(i);
  //     }
  //   }, []);

  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
          setList([...list, count]);
        }}
      >
        greet me
      </button>

      <Greeting list={list} />
    </div>
  );
};

// export {Count};
