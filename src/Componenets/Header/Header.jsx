import { Link, NavLink } from "react-router-dom";


const Header = () => {

    const navLinks = <>
        <li>
            <NavLink
                to={`/`}
                className={({ isActive, isPending }) =>
                    isActive
                        ? "text-[#FF444A] border-b-2 border-[#FF444A]"
                        : isPending
                            ? "pending"
                            : ""
                }
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to={`/donations`}
                className={({ isActive, isPending }) =>
                    isActive
                        ? "text-[#FF444A] border-b-2 border-[#FF444A]"
                        : isPending
                            ? "pending"
                            : ""
                }
            >
                Donation
            </NavLink>
        </li>
        <li>
            <NavLink
                to={`/statistics`}
                className={({ isActive, isPending }) =>
                    isActive
                        ? "text-[#FF444A] border-b-2 border-[#FF444A]"
                        : isPending
                            ? "pending"
                            : ""
                }
            >
                Statistics
            </NavLink>
        </li>
    </>


    return (
        <div className="container mx-auto px-4">
            <div className="navbar bg-base-100">
                <div className="w-full lg:w-1/2 justify-between lg:justify-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to="/"><img src="../Logo.png" alt="" /></Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="flex gap-12">
                        {navLinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;