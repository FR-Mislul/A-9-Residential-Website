import { IoLocationSharp } from "react-icons/io5";
import { TbCurrencyTaka } from "react-icons/tb";
import { useLoaderData, useParams } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";


const StateDetails = () => {

    const states = useLoaderData()
    const { id } = useParams()
    const state = states?.find(state => state.id == id);

    console.log(states)

    return (
        <div className="max-w-6xl mx-auto my-4 md:my-7 lg:my-10">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <div className="w-full lg:w-1/2 bg-[#1313130D] rounded-2xl flex flex-col justify-center p-4 md:p-6 lg:p-8">
                    <h2 className="font-varela font-bold">{state?.segment_name}</h2>
                    <img src={state?.image} className="w-full lg:h-4/6 rounded-lg" alt="" />
                </div>
                <div className=" lg:w-1/2 w-auto p-10 space-y-2">
                    <h2 className="card-title font-arvo text-2xl">{state?.estate_title}</h2>
                    <p className="font-serif font-normal text-lg">{state?.description}</p>
                    <div className="flex space-x-4">
                        <p className="font-bold text-xl font-arvo">Facilities:</p>
                        <ul className="font-lobster text-lg">
                            {state?.facilities[0] && <div className="flex items-center space-x-1">
                                <IoMdArrowDropright></IoMdArrowDropright><li>{state?.facilities[0]}</li>
                            </div>}
                            {state?.facilities[1] && <div className="flex items-center space-x-1">
                                <IoMdArrowDropright></IoMdArrowDropright><li>{state?.facilities[1]}</li>
                            </div>}
                            {state?.facilities[2] && <div className="flex items-center space-x-1">
                                <IoMdArrowDropright></IoMdArrowDropright><li>{state?.facilities[2]}</li>
                            </div>}
                            {state?.facilities[3] && <div className="flex items-center space-x-1">
                                <IoMdArrowDropright></IoMdArrowDropright><li>{state?.facilities[3]}</li>
                            </div>}
                            {state?.facilities[4] && <div className="flex items-center space-x-1">
                                <IoMdArrowDropright></IoMdArrowDropright><li>{state?.facilities[4]}</li>
                            </div>}
                            {state?.facilities[5] && <div className="flex items-center space-x-1">
                                <IoMdArrowDropright></IoMdArrowDropright><li>{state?.facilities[5]}</li>
                            </div>}
                            {state?.facilities[6] && <div className="flex items-center space-x-1">
                                <IoMdArrowDropright></IoMdArrowDropright><li>{state?.facilities[6]}</li>
                            </div>}
                        </ul>
                    </div>

                    <div className="flex space-x-2">
                        <p className="font-arvo text-lg font-bold">{state?.status}:</p>
                        <div className="flex items-center justify-start font-bold text-lg font-lobster">
                            <p ><TbCurrencyTaka className='text-xl'></TbCurrencyTaka ></p>
                            <p className=''>{state?.price}</p>
                        </div>
                    </div>
                    <div className="flex  space-x-2  text-blue-600 text-base font-bold">
                        <IoLocationSharp className='text-2xl'></IoLocationSharp>
                        <p className="font-mono">{state?.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StateDetails;