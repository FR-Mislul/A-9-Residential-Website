import { Link } from "react-router-dom";
import Header from "../Header/Header";
import StateCard from "../../Shared/StateCard/StateCard";
import { IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";
import AboutUs from "../AboutUs/AboutUs";
import { Helmet } from "react-helmet-async";


const Home = () => {

    const [states, setStates] = useState([])
    useEffect(() => {
        fetch('Residential.json')
            .then(res => res.json())
            .then(data => setStates(data))
    }, [])
    console.log(states)
    return (
        <div className="w- w-11/12 lg:max-w-6xl mx-auto">

            <Helmet>
                <title>Dream Home | Home </title>
            </Helmet>
            
            <Header></Header>

            <h1 className="text-xl md:text-3xl lg:text-5xl font-arvo font-bold text-center my-4 md:my-8 lg:my-10 text-gray-700">RE<span className="text-orange-300">CE</span>NT P<span className="text-orange-400">O</span>STS</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mx-auto mb-4">
                {
                    states?.map(state => <StateCard key={state.id} state={state}></StateCard>)
                }
            </div>
            <div className="flex justify-center">
                <Link to='/state'> <button className="btn text-blue-600">
                    More
                    <IoIosArrowForward></IoIosArrowForward>
                </button></Link>
            </div>

            <div className="my-4 md:my-7 lg:my-10">
                <AboutUs></AboutUs>
            </div>
        </div>
    );
};

export default Home;