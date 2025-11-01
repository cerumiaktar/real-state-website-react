import { useEffect, useState } from "react";
import Banner from "./Banner";
import RentFlat from "./RentFlat";
import RentContact from "./RentContact";


const RentFlats = () => {
    const [rentFlats, setRentFlats] = useState([]);

    useEffect(() => {
        fetch('flats.json')
            .then(res => res.json())
            .then(data => setRentFlats(data))
    }, [])
    return (
        <div className="">
            <Banner></Banner>
            <div className="mt-14 mb-14 container mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold dark:text-black">Flat For Rent</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {
                        rentFlats.map(rentFlat => <RentFlat rentFlat={rentFlat} ></RentFlat>)
                    }
                </div>
            </div>
            <RentContact></RentContact>
        </div>
    );
};

export default RentFlats;