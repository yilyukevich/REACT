interface IButton {
    value: string
}

export default function Button(props: IButton) {
    const divStyle = {
        width: '135px',
        height: '42px',
        border: '1px solid white'
    }

    const pStyle = {
        fontFamily: 'sans-serif',
        margin: '11px 26px'
    };

    return <div style={divStyle}><p style={pStyle}>{props.value}</p></div>;
}