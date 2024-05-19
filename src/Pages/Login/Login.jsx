import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Shared/AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const {loginUser, googleLogin, githubLogin} = useContext(AuthContext)

    const handelLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)

        loginUser(email, password)
        .then(result =>{
            console.log(result.user)
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
        googleLogin()
        .then(result => {
            console.log(result.user);
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
        githubLogin()
        .then(result => {
            console.log(result.user);
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
                    <input type="password" name="password" placeholder="Your Password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover text-sm">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6 mb-4">
                    <button className="btn btn-primary font-varela">Login</button>
                </div>
            </form>
            <p className="text-base font-varela">Do not have an account?  <Link className="text-blue-600 underline" to='/register'>Register</Link> </p>
            <div className="flex justify-center items-center gap-3 mt-5">
                <button onClick={handelGoogleLogin} className="btn btn-outline btn-accent">Google</button>
                <button onClick={handelGithubLogin} className="btn btn-outline btn-primary">GitHub</button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;