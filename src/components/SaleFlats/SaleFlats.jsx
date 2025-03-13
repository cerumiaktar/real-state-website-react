import { useEffect, useState } from "react";
import SaleBanner from "./SaleBanner";
import SaleFlat from "./SaleFlat";


const SaleFlats = () => {
    const [saleFlats, setSaleFlats] = useState([]);

    useEffect(() => {
        fetch('flats.json')
            .then(res => res.json())
            .then(data => setSaleFlats(data))
    }, [])
    return (
        <div>
            <SaleBanner></SaleBanner>
            <div className="mt-14 mb-14 container mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-medium">Flat For Sale</h1>
                    <p>See all</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {
                        saleFlats.map(saleFlat => <SaleFlat saleFlat={saleFlat}></SaleFlat>)
                    }
                </div>
            </div>
        </div>
    );
};

export default SaleFlats;