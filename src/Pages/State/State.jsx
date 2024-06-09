import { useEffect, useState } from "react";
import StateCard from "../../Shared/StateCard/StateCard";

const State = () => {
    const [states, setStates] = useState([])
    useEffect(() => {
        fetch('Residential.json')
        .then(res => res.json())
            .then(data => setStates(data))
    },[])
    console.log(states)

    return (
        <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mx-auto my-10">
            {
                states?.map(state => <StateCard key={state.id} state={state}></StateCard>)
            }
        </div>
    );
};

export default State;