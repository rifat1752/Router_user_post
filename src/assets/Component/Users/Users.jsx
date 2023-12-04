import { useLoaderData } from "react-router-dom";
import User from "./User";


const Users = () => {
    const style ={
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap:'20px'
    }
    
    const users = useLoaderData();

    return (
        <div>
            <h1>Here are our users:{users.length} </h1>
            <div style={style}>
                {
                    users.map(user=> <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;