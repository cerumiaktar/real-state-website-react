import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiSearchLine } from "react-icons/ri";

const Banner = () => {
    return (
        <div className="container mx-auto mt-12 ">
            <div
                className="hero h-[#234] rounded-2xl"
                style={{
                    backgroundImage: "url(https://i.ibb.co.com/qLqgkhby/Group-102.png)",
                }}>
                {/* <div className="hero-overlay rounded-2xl"></div> */}
                <div className="hero-content text-neutral-content text-center">
                    <div className="py-8">
                        <div className="space-x-8">
                            <button className="btn bg-white">All</button>
                            <button className="btn btn-outline">For Sale</button>
                            <button className="btn btn-outline">For Rent</button>
                        </div>
                        <div className="bg-white mt-4 py-4 px-8 flex flex-col md:flex-row items-center justify-center gap-8 rounded-lg">
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