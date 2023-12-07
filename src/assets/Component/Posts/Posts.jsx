import { useLoaderData } from "react-router-dom";
import Post from "./Post";

const Posts = () => {
    const posts = useLoaderData();
    const style ={
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap:'20px'
    }

    return (
        <div>
            <h1>here are the posts: {posts.length}</h1>
            <div style={style}>
                {posts.map(post=><Post key={post.id} post={post}></Post>)}
            </div>
        </div>
    );
};

export default Posts;