import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
    return (
        <>
            <div>
                <nav className="flex items-center justify-between text-slate-800 py-5 shadow-xl">
                    <Logo></Logo>
                    <ul className="flex gap-6">
                        <li className="font-semibold text-2xl">
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "text-red-500" : isActive ? "text-red-500 underline" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="font-semibold text-2xl">
                            <NavLink
                                to="/favorites"
                                className={({ isActive, isPending }) =>
                                    isPending ? "text-red-500" : isActive ? "text-red-500 underline" : ""
                                }
                            >
                                Favorites
                            </NavLink>
                        </li>
                        <li className="font-semibold text-2xl">
                            <NavLink
                                to="/login"
                                className={({ isActive, isPending }) =>
                                    isPending ? "text-red-500" : isActive ? "text-red-500 underline" : ""
                                }
                            >
                                Login
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Navbar;