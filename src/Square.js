import React from 'react';

export const Square = (props) => {
    const label = props.value + 'hello';
    return <button>{label}</button>;
};

export function SquareFn(props) {
    const label = props.value + 'hello';
    return <button>{label}</button>;
}

// export { Square, SquareFn };
