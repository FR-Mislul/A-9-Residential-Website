import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <div className="w-full h-screen border-4 border-black flex flex-col justify-center items-center space-y-4">
                <h1 className="text-9xl text-red-700 font-bold">404</h1>
                <h1 className="font-medium text-lg">Is Not A Valid Route Please Go To Home</h1>
                <Link to='/'><button className="btn btn-outline btn-error">Home</button></Link>
            </div>
        </div>
    );
};

export default Error;