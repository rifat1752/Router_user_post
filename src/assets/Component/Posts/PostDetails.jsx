import { useLoaderData, useNavigate } from "react-router-dom";


const PostDetails = () => {
    const navigate = useNavigate();
    const post = useLoaderData();
    const {id,title,body} = post;
    const goBack =()=>{
        navigate("/posts");
    }
    const postStyle ={
        width:'400px',
        height:'300px',
        border:'2px solid yellow',
        padding:'10px',
        borderRadius:'10px',
        display: 'flex',
        flexDirection:'column',
        justifyContent:'space-around',
        background:'tomato',
        margin: '50px auto'
    }
    console.log(title)
    return (
        <div>
            <div style={postStyle}>
            <p>User id: {id}</p>
            <h4>{title}</h4>
           <p>{body}</p>
           <button onClick={goBack}>Go Back</button>
        </div>
        </div>
    );
};

export default PostDetails;