import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    const clickAddHandler = (increaseValue: number) => setCount(count + increaseValue);
    const clickClearHandler = () => setCount(0);

    return (
        <div style={{
            border: '1px solid white',
            padding: '10px'
        }}>
            <p>{count}</p>
            <button onClick={() => clickAddHandler(-100)}>-100</button>
            <button onClick={() => clickAddHandler(-10)}>-10</button>
            <button onClick={() => clickAddHandler(-1)}>-1</button>
            <button onClick={() => clickAddHandler(1)}>+1</button>
            <button onClick={() => clickAddHandler(10)}>+10</button>
            <button onClick={() => clickAddHandler(100)}>+100</button>
            <button onClick={() => clickClearHandler()}>clear</button>
        </div>
    );
}