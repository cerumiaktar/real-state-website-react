import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiSearchLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const SaleBanner = () => {
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
                            <Link to='/'><button className="btn btn-outline">All</button></Link>
                            <button className="btn bg-white dark:border-none dark:text-[#637307]">For Sale</button>
                            <Link to='/rent'><button className="btn btn-outline">For Rent</button></Link>
                        </div>
                        <div className="bg-white mt-4 py-4 px-8 flex flex-col md:flex-row items-center justify-center gap-8 rounded-lg">
                            <div>
                                <button className="text-[#637307] flex items-center btn border-[#637307] dark:bg-white" ><span><HiOutlineLocationMarker /></span>City</button>
                            </div>
                            <div>
                                <button className="text-[#637307] flex items-center btn border-[#637307] dark:bg-white" >Property type<span><MdOutlineKeyboardArrowDown /></span></button>
                            </div>
                            <div>
                                <button className="text-[#637307] flex items-center btn border-[#637307] dark:bg-white" >Price<span><MdOutlineKeyboardArrowDown /></span></button>
                            </div>
                            <div>
                                <button className="text-white flex items-center btn bg-[#637307] dark:border-none" ><span><RiSearchLine /></span>Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SaleBanner;