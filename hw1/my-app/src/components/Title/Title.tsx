import './title.css'

interface ITitle {
    value: string;
};

export default function Title(props: ITitle) {
    return (
        <p className="title">{props.value}</p>
    );
}