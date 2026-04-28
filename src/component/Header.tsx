// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-white shadow-md  z-50 " style={{ backgroundColor: "rgba(73, 12, 108, 0.2)" }}>
            <div className="max-w-6xl mx-auto flex items-center justify-between p-4">

                {/* Logo */}
                <h1 className="text-2xl font-bold text-gray-900">
                    My Store
                </h1>

                {/* Nav Links */}
                <nav className="flex items-center gap-6 text-gray-700 font-medium text-lg">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `
    relative px-4 py-2 rounded-lg text-sm font-medium
    transition-all duration-300 ease-in-out

    ${isActive
                                ? "bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-md shadow-purple-700/30"
                                : "text-gray-800 hover:text-white hover:bg-white/10"}
    `
                        }
                    >
                        Home
                    </NavLink>




                    <NavLink
                        to="/cart"
                        className={({ isActive }) =>
                            `
    relative px-4 py-2 rounded-lg text-sm font-medium
    transition-all duration-300 ease-in-out

    ${isActive
                                ? "bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-md shadow-purple-700/30"
                                : "text-gray-800 hover:text-white hover:bg-white/10"}
    `
                        }
                    >
                        Cart
                    </NavLink>


                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `
    relative px-4 py-2 rounded-lg text-sm font-medium
    transition-all duration-300 ease-in-out

    ${isActive
                                ? "bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-md shadow-purple-700/30"
                                : "text-gray-800 hover:text-white hover:bg-white/10"}
    `
                        }
                    >
                        about
                    </NavLink>



                </nav>
            </div>
        </header>
    );
};

export default Header;

// relative bg - black text - white px - 4 py - 2 rounded - lg hover: bg - gray - 800 transition

//  bg-gradient-to-br from-purple-700 via-fuchsia-800 to-gray-900