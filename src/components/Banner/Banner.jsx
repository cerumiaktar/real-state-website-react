import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiSearchLine } from "react-icons/ri";

const Banner = () => {
    return (
        <div className="bg-[#637307] mt-14 container mx-auto rounded-2xl h-[401px]">
            <div className="hero">
                <div className="hero-content text-center text-white">
                    <div className="mt-8">
                        <h1 className="text-5xl font-bold">Choosing Your Next Place to Live</h1>
                        <p className="py-6">
                            you're looking for a vibrant city atmosphere or a
                            quiet suburban retreat.
                        </p>
                        <div className="space-x-8">
                            <button className="btn bg-white">All</button>
                            <button className="btn btn-outline">For Sale</button>
                            <button className="btn btn-outline">For Rent</button>
                        </div>
                        <div className="bg-white mt-8 py-4 flex items-center justify-center gap-8 rounded-lg">
                            <div>
                                <button className="text-[#637307] flex items-center btn border-[#637307]" ><span><HiOutlineLocationMarker /></span>City</button>
                            </div>
                            <div>
                                <button className="text-[#637307] flex items-center btn border-[#637307]" >Property type<span><MdOutlineKeyboardArrowDown /></span></button>
                            </div>
                            <div>
                                <button className="text-[#637307] flex items-center btn border-[#637307]" >Price<span><MdOutlineKeyboardArrowDown /></span></button>
                            </div>
                            <div>
                                <button className="text-white flex items-center btn bg-[#637307]" ><span><RiSearchLine /></span>Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;