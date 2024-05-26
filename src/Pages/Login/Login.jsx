import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Shared/AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash, FaGoogle, FaGithub } from 'react-icons/fa';

const Login = () => {

    const { user, loginUser, googleLogin, githubLogin } = useContext(AuthContext)

    const [showPassword, setShowPassword] = useState()

    const navigate = useNavigate();
    const location = useLocation()

    const handelLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        if (user) {
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

        loginUser(email, password)
            .then(result => {
                console.log(result.user)
                if(result.user){
                    navigate(location.state || '/')
                }
                toast.success('Log In Successfully 😊', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            })
            .catch(error => {
                console.log(error)
                toast.error(error.message.split('/')[1], {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            })

    }
    const handelGoogleLogin = e => {
        e.preventDefault();

        if (user) {
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

        googleLogin()
            .then(result => {
                console.log(result.user);
                if(result.user){
                    navigate(location.state || '/')
                }
                toast.success('Google Login Successfully 🤗', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            })
            .catch(error => {
                console.error(error)
                toast.error(error.message.split('/')[1], {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            })
    }

    const handelGithubLogin = e => {
        e.preventDefault()

        if (user) {
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

        githubLogin()
            .then(result => {
                console.log(result.user);
                if(result.user){
                    navigate(location.state || '/')
                }
                toast.success('GitHub Login Successfully 🤗', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
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
                });
            })

    }

    return (
        <div className="md:w-3/4 lg:w-1/2 mx-auto my-20 shadow-2xl shadow-gray-400 rounded-2xl p-10">
            <h1 className="text-3xl font-arvo mb-5">Please Login</h1>
            <form onSubmit={handelLogin} className="">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-varela font-medium text-base">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-varela font-medium text-base">Password</span>
                    </label>
                    <div className="relative">
                        <input type={showPassword ? "text" : "password"} name="password" placeholder="Your Password" className="input input-bordered w-full " required />
                        <span className="absolute top-4 right-6" onClick={() => setShowPassword(!showPassword)}> {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>} </span>
                    </div>
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover text-sm">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6 mb-4">
                    <button className="btn btn-primary font-varela">Login</button>
                </div>
            </form>
            <p className="text-base font-varela">Do not have an account?  <Link className="text-blue-600 underline" to='/register'>Register</Link> </p>
            <div className="flex justify-center items-center gap-5 mt-5">
                <button onClick={handelGoogleLogin} className="btn btn-outline btn-accent"><FaGoogle className="text-2xl"></FaGoogle> Google</button>
                <button onClick={handelGithubLogin} className="btn btn-outline btn-primary"><FaGithub className="text-2xl"></FaGithub> GitHub</button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;