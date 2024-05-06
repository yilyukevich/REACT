export default function Panel(props: any) {
    
    const divStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        gap: '5px'
    }; 

    return (
        <div style={divStyle}>
            {props.children}
        </div>
    );
}