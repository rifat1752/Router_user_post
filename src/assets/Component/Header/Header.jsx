import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/Users">Users</Link>
            </nav>
        </div>
    );
};

export default Header;