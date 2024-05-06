import { useState } from "react";

interface IPost {
    title: string
};

export default function Post(props: IPost) {
    
    const [likes, setLikes] = useState(0);

    const likeHandler = () => {
        setLikes(likes + 1);
    };


    const divStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '20px',
        border: '1px solid white'
    };    

    return (
        <div style={divStyle}>
            <p>{props.title}</p>
            <button onClick={likeHandler}>like {likes}</button>
        </div>
    )
}