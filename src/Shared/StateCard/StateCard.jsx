import PropTypes from 'prop-types'
import { TbCurrencyTaka } from "react-icons/tb";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
// import { useLoaderData } from 'react-router-dom';



const StateCard = ({state}) => {
    // const state = useLoaderData();
    // console.log('this is state',state)
    return (
        <div className="max-w-6xl mx-auto">
            <div className="card lg:card-side bg-base-100 shadow-xl p-2">
                <div className='mb-8'>
                    <h1 className='text-base md:text-xl lg:text-2xl text-gray-600 font-arvo font-bold mb-4'>{state?.estate_title}</h1>
                    <figure><img className='w-full lg:w-80' src={state?.image} alt="Album" /></figure>
                </div>
                <div className="mx-6 lg:mt-10 space-y-2 relative">
                    <h2 className="card-title font-varela text-base md:text-xl lg:text-2xl">{state?.segment_name}</h2>
                    <h2 className='text-base md:text-lg lg:text-xl font-mono'>{state?.status}</h2>
                    <div className="flex items-center justify-start font-bold font-lobster">
                        <p ><TbCurrencyTaka className='text-xl'></TbCurrencyTaka ></p>
                        <p className=''>{state?.price}</p>
                    </div>
                    <div className="flex  space-x-2  text-blue-600 font-bold">
                        <IoLocationSharp className='text-2xl'></IoLocationSharp>
                        <p className="font-mono">{state?.location}</p>
                    </div>
                    <div className="">
                    <Link to={`/state/${state?.id}`}><button className="btn btn-secondary mt-14 lg:ml-16 mb-8 lg:mb-0 w-full lg:w-auto">See Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

StateCard.propTypes = {
    state: PropTypes.object
}

export default StateCard;