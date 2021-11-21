import { Link, useLocation } from "react-router-dom";
import "./Topbar.scss";

const Topbar = () => {
    const location = useLocation();
    return (
        <div className="flex justify-content-between px-10 bg-green-400 items-center shadow drop-shadow-xl">
            <div className="w-full pb-3 py-2">
                <h1 className="text-3xl text-white">
                    <i className="fas fa-store text-2xl"></i> Store App
                </h1>
            </div>
            <div className="w-full text-center pb-3 py-2">
                <ul className="flex">
                    <li className={`hover-state ${location.pathname === "/" ? "text-white" : "text-gray-300"} flex-1`}>
                        <Link to="/" className="cursor-pointer">
                            <i className="fas fa-shopping-cart"></i> Shop
                        </Link>
                    </li>
                    <li className={`hover-state  ${location.pathname === "/Orders" ? "text-white" : "text-gray-300"} flex-1`}>
                        <Link to="/Orders" className="cursor-pointer">
                            <i className="fas fa-shopping-basket"></i> Orders
                        </Link>
                    </li>
                    <li className={`hover-state ${location.pathname === "/Checkout" ? "text-white" : "text-gray-300"} flex-1`}>
                        <Link to="/Checkout" className="cursor-pointer">
                            <i className="fas fa-file-invoice-dollar"></i> Checkout
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="w-full pb-3 py-2 text-right">
                <img className="h-8 float-right" src="https://raw.githubusercontent.com/dmalvia/React_Redux_ToolKit_Movie_App/master/src/images/user.png" alt="user" />
            </div>
        </div>
    );
}

export default Topbar;