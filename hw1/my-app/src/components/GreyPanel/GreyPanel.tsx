export default function GreyPanel(props: any) {
    const divStyle = {
        width: '740px',
        backgroundColor: 'grey',
        padding: '37px 581px 42px 24px'
    };

    return <div style={divStyle}>{props.children}</div>
}