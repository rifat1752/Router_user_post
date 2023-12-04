import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";



const Home = () => {
    return (
        <div>
            <h1 >this is home page</h1>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
           
        </div>
    );
};

export default Home;