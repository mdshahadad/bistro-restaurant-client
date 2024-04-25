import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);

    const handleLogOut = () => {
        signOutUser()
            .then(() => {
                console.log('SingOut Succesfully')
            })
            .catch(error => {
                console.log(error)
            })
    }

    const navOptions =
        <>
            <li><Link to='/menu'>Our Menu</Link></li>
            <li><Link to="/order/salad">Order Food</Link></li>
            <li><Link to='/menu'>Our Menu</Link></li>
            {
                user ?
                    <>
                        <li onClick={handleLogOut}> <Link to='/'>SignOut</Link></li>
                    </> :
                    <>
                        <li><Link to='/login'>Login</Link></li >
                    </>
            }
            <li>
                <Link to="/">
                    <button className="flex">
                        <FaCartShopping className="text-4xl" />
                        <div className="badge badge-success absolute top-0 right-0">+0</div>
                    </button>
                </Link>
            </li>
        </>

    return (
        <div>
            <div className="navbar fixed z-10 text-black backdrop-blur-md">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;