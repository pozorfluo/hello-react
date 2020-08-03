import React from 'react';

function formatName(user) {
  return user.firstname + ' ' + user.lastname;
}

export const Square = (props) => {
  let greetings = 'stranger';
  if (props.user) {
    greetings = formatName(props.user);
  }
  let escape_me = "javascript:/*--></title></style></textarea></script></xmp><svg/onload='+/"/+/onmouseover=1/+/[*/[]/+alert('SadPanda')//'>";
  return (
    <div>
      <h1>Howdy, {greetings} ?</h1>
      <h2>whatchu doin round these parts ?</h2>
      {escape_me}
    </div>
  );
};
// export function SquareFn(props) {
//   const label = props.value + 'hello';
//   return <button>{label}</button>;
// }

// export { Square, SquareFn };
