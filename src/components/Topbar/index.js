import { useLocation } from "react-router";
import "./Topbar.scss";

const Topbar = () => {
    const location = useLocation();

    console.log(location.pathname);
    return (
        <div className="flex justify-content-between px-10 bg-green-500 items-center shadow drop-shadow-xl">
            <div className="w-full pb-3 py-2">
                <h1 className="text-3xl text-white">
                    <i className="fas fa-store text-2xl"></i> Store App
                </h1>

            </div>
            <div className="w-full text-center pb-3 py-2">
                <ul className="flex">
                    <li className="hover-state text-gray-300 cursor-pointer flex-1">
                        <i className="fas fa-shopping-cart"></i> Shop
                    </li>
                    <li className="hover-state text-gray-300 cursor-pointer flex-1">
                        <i className="fas fa-shopping-basket"></i> Orders
                    </li>
                    <li className="hover-state text-gray-300 cursor-pointer flex-1">
                        <i className="fas fa-file-invoice-dollar"></i> Checkout
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