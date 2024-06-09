import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-black text-base-content rounded">
            <nav className="grid grid-flow-col gap-4 text-white">
                <NavLink to='/blog'><a className="link link-hover">About us</a></NavLink>
                <NavLink to='/contactMe'><a className="link link-hover">Contact</a></NavLink>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4 text-white text-4xl">
                    <a href="https://www.facebook.com/profile.php?id=100077465942827"><FaFacebook></FaFacebook></a>
                    <a href="https://www.instagram.com/frmislulalom/?igsh=MWEwa2JpMTY2c3h2NA%3D%3D"><FaInstagram></FaInstagram></a>
                    <a href=""><FaTwitter></FaTwitter></a>
                </div>
            </nav>
            <aside>
                <p className="text-white">Copyright © 2024 - All right reserved by Dream Home Industries Ltd</p>
            </aside>
        </footer>
    );
};

export default Footer;