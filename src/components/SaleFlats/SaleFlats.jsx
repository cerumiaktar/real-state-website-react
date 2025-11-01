import { useEffect, useState } from "react";
import SaleBanner from "./SaleBanner";
import SaleFlat from "./SaleFlat";
import SaleContact from "./SaleContact";


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
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold dark:text-black">Flat For Sale</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {
                        saleFlats.map(saleFlat => <SaleFlat saleFlat={saleFlat}></SaleFlat>)
                    }
                </div>
            </div>
            <SaleContact></SaleContact>
        </div>
    );
};

export default SaleFlats;