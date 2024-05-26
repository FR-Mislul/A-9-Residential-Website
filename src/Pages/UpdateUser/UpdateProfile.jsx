import { useContext } from "react";
import { AuthContext } from "../../Shared/AuthProvider/AuthProvider";

const UpdateProfile = () => {

    const { user } = useContext(AuthContext);


    return (
        
                <div className="md:w-3/4 lg:w-1/2 mx-auto my-10 card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <img className="w-28 lg:w-52 md:w-40 h-28 lg:h-52 md:h-40 mx-auto" src={user?.photoURL} alt="" />
                    <p className="text-center font-arvo font-bold text-2xl mt-2">{user?.displayName}</p>
                    <p className="text-center font-mono text-xl font-medium">{user?.email}</p>
                </div>
            
    );
};

export default UpdateProfile;