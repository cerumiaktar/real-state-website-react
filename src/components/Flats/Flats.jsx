import { useEffect, useState } from "react";
import Flat from "./Flat";
import { Link } from "react-router-dom";


const Flats = () => {

    const [flats, setFlats] = useState([]);
    const [flatlength, setFlatLength] = useState([8]);

    useEffect(() => {
        fetch('flats.json')
            .then(res => res.json())
            .then(data => setFlats(data))
    }, [])

    return (
        <div className="container mx-auto mt-14 mb-14">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-medium dark:text-black">Our Featured Flat</h1>
                <Link to='/sale'><p className="dark:text-[#333333]">See all</p></Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {
                    flats.slice(0, flatlength).map((flat, idx) =><Flat key={idx} flat={flat}></Flat>)
                }
            </div>
            <div className="mt-6 flex justify-center">
                <button onClick={() =>{setFlatLength()}} className="btn border-[#637307] text-[#637307] text-lg dark:bg-white">Load More</button>
            </div>
        </div>
    );
};

export default Flats;