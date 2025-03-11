import { useEffect, useState } from "react";
import Flat from "./Flat";


const Flats = () => {

    const [flats, setFlats] = useState([]);

    useEffect(() => {
        fetch('flats.json')
            .then(res => res.json())
            .then(data => setFlats(data))
    }, [])

    return (
        <div className="container mx-auto mt-14 mb-14">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-medium">Our Featured Flat</h1>
                <p>See all</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {
                    flats.map((flat, idx) =><Flat key={idx} flat={flat}></Flat>)
                }
            </div>
        </div>
    );
};

export default Flats;