/* eslint-disable react/prop-types */
import { Link, Navigate, useNavigate } from "react-router-dom";


const Post = ({post}) => {
    const{id,title} = post;
    const postStyle ={
        width:'250px',
        height:'200px',
        border:'2px solid yellow',
        padding:'10px',
        borderRadius:'10px',
        display: 'flex',
        flexDirection:'column',
        justifyContent:'space-around',
        background:'tomato'
    }
    const Navigate =useNavigate();
    const postDetails =()=>{
        Navigate(`/posts/${id}`)
    }
    return (
        <div style={postStyle}>
            <p>User id: {id}</p>
            <h4>{title}</h4>
            <Link to={`/posts/${id}`}><button>See more</button></Link>
            <button onClick={postDetails}>Click to see details</button>
        </div>
    );
};

export default Post;