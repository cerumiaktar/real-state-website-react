import { useEffect, useState } from "react";
import Expert from "./Expert";


const Experts = () => {
    const [experts, setExperts] = useState([]);

    useEffect(()=>{
        fetch('experts.json')
        .then(res=>res.json())
        .then(data=>setExperts(data))
    } ,[])
    return (
        <div className="container mx-auto mb-14">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-medium">Meet Our Experts</h1>
                <p>See all</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {
                    experts.map(expert =><Expert expert={expert}></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;