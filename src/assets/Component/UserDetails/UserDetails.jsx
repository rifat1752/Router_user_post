import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user =useLoaderData();
    const details ={
        width:'300px',
        height:'400px',
        border:'2px solid yellow',
        padding:'10px',
        borderRadius:'10px',
        display: 'flex',
        flexDirection:'column',
        justifyContent:'space-around',
        background: 'skyblue',
        margin:'50px auto'

    }
    const{id,name,username,email,address,phone,website,company} =user;
    return (
        <div>
            <h1>Details About User</h1>
            <div style={details}>
                <h3>Name: {name}</h3>
                <p>UserId: {id}</p>
                <p>Username: {username}</p>
                <p>Email: {email}</p>
                <p>address : {address.suite}, {address.street}, {address.city}</p>
                <p>Phone: {phone}</p>
                <p>Website: www.{website}</p>
                <p>Company: {company.name}</p>
            </div>
        </div>
    );
};

export default UserDetails;