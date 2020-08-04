import React, { useState, useEffect } from 'react';

function formatName(user) {
  return user.firstname + ' ' + user.lastname;
}

function reverseStr(str) {
  return str.split('').reverse().join('');
}

export const LetterList = (props) => {
  const [id] = useState(props.id);
  console.log('Rendering LetterList-' + id);

  const char_list = props.word.split('').map((c) => <li>{c}</li>);

  return (
    <React.Fragment>
      <ul style={{ listStyleType: 'none' }}>{char_list}</ul>
    </React.Fragment>
  );
};

export const Square = (props) => {
  const [id] = useState(props.id);
  console.log('Rendering Square-' + id);

  let greetings = 'stranger';
  if (props.user) {
    greetings = formatName(props.user);
  }

  if (props.reverse) {
    return (
      <React.Fragment>
        <h1>Howdy, {props.reverse ? greetings : reverseStr(greetings)} ?</h1>
        <h3>reverse : {props.reverse}</h3>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h1>Not much to say.</h1>
      </React.Fragment>
    );
  }
};

export const SquareFn = (props) => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(0);
  const [time, setTime] = useState(new Date());
  const [id] = useState(props.id);
  console.log('Rendering SquareFn-' + id);

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
      <button onClick={() => setCount(count + 1)}>
        {props.user.firstname}
      </button>
      <button onClick={() => setToggle(toggle ^ 1)}>
        {toggle ? props.user.firstname : reverseStr(props.user.firstname)}
      </button>
      <Square user={props.user} reverse={toggle} id="00" />
      <h2
        style={{ color: toggle ? 'hotpink' : 'dodgerblue' }}
        onClick={() => setTime(new Date())}
      >
        {time.toLocaleTimeString()}
      <LetterList word={time.toLocaleTimeString()} id="00" />
      </h2>
    </React.Fragment>
  );
};

export const TextField = (props) => {
  const [input, setInput] = useState('');
  const [id] = useState(props.id);
  console.log('Rendering TextField-' + id);

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
