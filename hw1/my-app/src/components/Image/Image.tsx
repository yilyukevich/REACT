interface IImage {
    src: string
}

export default function Image(props: IImage) {
    return <img style={{padding: '50px 0'}} src={props.src} />
}