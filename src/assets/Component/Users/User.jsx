/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const User = ({user}) => {
    const{id,name,username,email} =user;
    const userStyle ={
        width:'200px',
        height:'250px',
        border:'2px solid yellow',
        padding:'10px',
        borderRadius:'10px',
        display: 'flex',
        flexDirection:'column',
        justifyContent:'space-around',

    }
    return (
        <div style={userStyle}>
            <p>User ID :{id}</p>
            <p>Name : {name} </p>
            <p>Username:{username}</p>
          <Link to={`/user/${id}`}>Show details</Link>
        </div>
    );
};

export default User;