import { useState } from "react";

export default function Hider() {
    const [visible, setVisible] = useState(true);

    const divStyle: React.CSSProperties = {
        border: '1px solid white',
        height: '100px',
        padding: '10px'
    };

    return (
        <div style={divStyle}>

            {!visible && <button onClick={() => { setVisible(true); }}>open</button>}
            {visible && <div><button onClick={() => { setVisible(false); }}>close</button><p>Hello</p></div>}

        </div>
    );
}