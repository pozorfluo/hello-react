import React, { useState, useEffect } from 'react';

function formatName(user) {
  return user.firstname + ' ' + user.lastname;
}

function reverseStr(str) {
  return str.split('').reverse().join('');
}

export const Square = (props) => {
  let greetings = 'stranger';

  if (props.user) {
    greetings = formatName(props.user);
  }

  return (
    <React.Fragment>
      <h1>Howdy, {props.toggle ? greetings : reverseStr(greetings)} ?</h1>
    </React.Fragment>
  );
};

export const SquareFn = (props) => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(1);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    function tick() {
      setTime(new Date());
    }

    const timer_id = setInterval(tick, 1000);
    document.title = `${count} times`;

    return () => {
      clearInterval(timer_id);
    };
  });

  return (
    <React.Fragment>
      <Square user={props.user} reverse={toggle} />
      <button onClick={() => setCount(count + 1)}>
        {props.user.firstname}
      </button>
      <button onClick={() => setToggle(toggle ^ 1)}>
        {toggle ? props.user.firstname : reverseStr(props.user.firstname)}
      </button>
      <h2
        style={{ color: toggle ? 'hotpink' : 'dodgerblue' }}
        onClick={() => setTime(new Date())}
      >
        {time.toLocaleTimeString()}
      </h2>
    </React.Fragment>
  );
};

export const TextField = (props) => {
  const [input, setInput] = useState('');

  return (
    <React.Fragment>
      <label for="field">{input}</label>
      <input
        onInput={(event) => setInput(event.target.value)}
        name="field"
        type="text"
      />
    </React.Fragment>
  );
};
// export { Square, SquareFn };
