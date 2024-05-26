import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Shared/AuthProvider/AuthProvider";
import { Slide, ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const Register = () => {

    const { user, createUser, updateUserProfile} = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState()
    const navigate = useNavigate();
    const location = useLocation();

    const handelRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const photo = form.get('photo');
        const password = form.get('password');
        console.log(name, email, photo, password);


        if(user){
            toast.error('Already user is logged in please Log Out', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            return;
        }

        else if (password.length < 6) {
            toast.error('Password must be 6 characters', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Zoom,
            });
            return;
        }
        else if (!/^(?=.*[A-Z]).+$/.test(password)) {
            toast.error('Password must be 1 uppercase', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Zoom,
            });
            return;
        }

        else if (!/^(?=.*[a-z]).+$/.test(password)) {
            toast.error('Password must be 1 lowercase', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Zoom,
            });
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                updateUserProfile(name, photo)
                .then(() => {
                    if(result.user){
                        navigate(location.state || '/')
                    }
                })
                
                toast.success('Registration Successfully 😱', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Slide,
                });
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message.split('/')[1], {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Zoom,
                });
            })

    }

    return (
        <div className="md:w-3/4 lg:w-1/2 mx-auto my-20 shadow-2xl shadow-gray-400 rounded-2xl p-10">
            <h1 className="text-3xl font-arvo mb-5">Please Register</h1>
            <form onSubmit={handelRegister}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-varela font-medium text-base">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-varela font-medium text-base">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-varela font-medium text-base">PhotoURL</span>
                    </label>
                    <input type="text" name="photo" placeholder="Your Photo" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-varela font-medium text-base">Password</span>
                    </label>
                    <div className="relative">
                        <input type={showPassword ? "text" : "password"} name="password" placeholder="Your Password" className="input input-bordered w-full" required />
                        <span className="absolute top-4 right-6" onClick={() => setShowPassword(!showPassword)}> {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>} </span>
                    </div>
                </div>
                <div className="form-control mt-6 mb-4">
                    <button className="btn btn-secondary font-varela">Login</button>
                </div>
            </form>
            <p className="text-base font-varela">Already have an account?  <Link className="text-blue-600 underline" to='/login'>Login</Link> </p>
            <ToastContainer />
        </div>
    );
};

export default Register;