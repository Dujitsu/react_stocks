import React from 'react';

export default function subTest({ counter, setCounter }) {
    const inc = () => {setCounter(counter + 1); };
    const dec = () => {setCounter(counter - 1); };

    return(
        <div>
            <button>Temp button</button>
            <h1>Hello, counter = {counter}</h1>
        </div>
    )
}