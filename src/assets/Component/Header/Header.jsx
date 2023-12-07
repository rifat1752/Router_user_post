import { Link, NavLink } from "react-router-dom";
import "./Header.css"



const Header = () => {
    return (
        <div>
            <nav>
                
                <NavLink to="/">Home</NavLink>
                <NavLink to="/About">About</NavLink>
                <NavLink to="/Contact">Contact</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/Users">Users</NavLink>
              
            </nav>
        </div>
    );
};

export default Header;