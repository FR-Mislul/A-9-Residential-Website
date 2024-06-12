import { useContext } from "react";
import { AuthContext } from "../../Shared/AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import userImg from '../../../public/img/user.jpg'


const UpdateProfile = () => {

    const { user, updateUserProfile } = useContext(AuthContext);

    const handelUpdateProfile = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');

        console.log(form, name, photo)


        updateUserProfile(name, photo)
            .then((result) => {
                if (result.user) {
                    Navigate(location.state || '/')
                    console.log(result.user)
                }
            })
    }


    return (

        <div className="md:w-3/4 lg:w-1/2 mx-auto my-10 card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="relative">
                {
                    user?.photoURL == null ?
                        <img className="w-28 lg:w-52 md:w-40 h-28 lg:h-52 md:h-40 mx-auto rounded-full" src={userImg} alt="" />
                        :
                        <img className="w-28 lg:w-52 md:w-40 h-28 lg:h-52 md:h-40 mx-auto rounded-full" src={user?.photoURL} alt="" />
                }
                <div className="absolute w-4 h-4 border-green-300 border-2 rounded-full bg-green-500 right-28 bottom-4"></div>
            </div>
            {
                user?.displayName == null ?
                    <p className="text-center text-base font-medium"><span className="font-bold">name:</span> NAN</p>
                    :
                    <p className="text-center font-arvo font-bold text-2xl my-2"><span className="font-bold">name:</span> {user?.displayName}</p>
            }
            
            {
                user?.email == null ?
                    <p className="text-center text-base font-medium"><span className="font-bold">email:</span> Private Email</p>
                    :
                    <p className="text-center font-mono text-xl font-medium"><span className="font-bold">email:</span> {user?.email}</p>
            }
            <p className="text-center text-base mt-2"><span className="font-bold">creationTime:</span> {user?.metadata?.creationTime}</p>

            <div className="my-10">
                <h1 className="font-serif text-lg font-bold text-center">Update Name and Photo</h1>
                <form onSubmit={handelUpdateProfile} className="flex flex-col justify-center">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-varela font-medium text-base">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-varela font-medium text-base">PhotoURL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Your Photo" className="input input-bordered" />
                    </div>

                    <button className="btn btn-primary mt-2">Save</button>
                </form>
            </div>
        </div>

    );
};

export default UpdateProfile;