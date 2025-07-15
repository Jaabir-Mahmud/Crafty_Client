import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Root = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 font-sans antialiased">
           <Navbar></Navbar>
           <main className="pt-16">
               <Outlet></Outlet>
           </main>
           <Footer></Footer>
        </div>
    );
};

export default Root;