import React from 'react';

export const Greeting = (props) => {
    const formatted_list = props.list.map((entry, i) => (
        <li key={entry + i}>
            {entry}
        </li>
    ));

    return (
        <ul style={{ listStyleType :'none'}}>{formatted_list}</ul>
    );
};
