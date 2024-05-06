type TColor = 'blue' | 'red';

interface ILine {
    color: TColor
};

export default function Line(props: ILine) {
    const divStyle = {
        width: '64px',
        height: '1px',
        backgroundColor: props.color,
        margin: '50px'
    };

    return <div style={divStyle}></div>
}