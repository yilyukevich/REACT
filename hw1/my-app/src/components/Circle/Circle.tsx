interface ICircle {
    color: string
};

export default function Circle(props: ICircle) {

    const circleStyle = {
        width: '50px',
        height: '50px',
        borderRadius: '100%',
        backgroundColor: props.color
    };

    return <div style={circleStyle}></div>
}