import React, { useState, useEffect } from 'react';
import {Greeting} from './Greeting.js';
//TODO : importer ici le composant Greeting

export const Count = (props) => {
    const [count, setCount] = useState(0);
    const [list, setList] = useState([]);

        // useEffect(() => {
    //     console.log(props);
    //     // setList((list) => [...list, props.count]);
    // });

    return (
        <div>
            <p>{count}</p>
             <button onClick={() => {
                 setCount(count + 1);
                 setList([...list, count]);
                 }
            } >greet me</button> 
                  
            <Greeting list={list}/>
        </div>
    );
}


