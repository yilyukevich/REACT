import Post from "./Post";

export default function Posts() {
    const posts = ['Hello JavaScript', 'Hello TypeScript', 'Hello REACT'];

    return (
        <div>
            {posts.map(post => {
                return <Post title={post} />
            })
            }
        </div>
    );
}