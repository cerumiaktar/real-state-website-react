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
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-medium dark:text-black">Flat For Rent</h1>
                    <p className="dark:text-[#333333]">See all</p>
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