import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handelLogout = () => {
        logOut()
            .then(result => {
                console.log(result);
                toast.success('LogOut Successfully 😞')
            })
            .catch(error => {
                console.error(error);
            })
    }

    const navLink = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/contact'>Contact me</NavLink></li>
        <li><NavLink to='/'>About Us</NavLink></li>
        <li><NavLink to='/'>Update Profile</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 font-varela">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <a className="text-3xl"><span className="font-black font-arvo">Dream</span> <span className="font-lobster font-medium text-orange-500">Home</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="flex items-center justify-center gap-3">
                            {
                                user.photoURL == null ?
                                    <div>
                                        {
                                            user?.displayName == null ?
                                                <p>{user?.email}</p>
                                                :
                                                <p className="">  {user?.displayName}</p>
                                        }
                                    </div>
                                    :
                                    <img className="w-14 h-14 rounded-full" src={user.photoURL} alt="" />

                            }
                            <button onClick={handelLogout} className="btn btn-error text-white">Log Out</button>
                        </div>
                        :
                        <Link to='/login'><button className="btn btn-accent text-white">Login</button></Link>
                }
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>

    );
};

export default Navbar;