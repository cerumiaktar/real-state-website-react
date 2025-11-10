import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiSearchLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Banner = () => {

    return (
        <div className="bg-[#637307] mt-14 container mx-auto rounded-2xl md:h-[401px]">
            <div className="hero">
                <div className="hero-content text-center text-white">
                    <div className="mt-8">
                        <h1 className="text-5xl font-bold">Choosing Your Next Place to Live</h1>
                        <p className="py-6">
                            you're looking for a vibrant city atmosphere or a
                            quiet suburban retreat.
                        </p>
                        <div className="space-x-8">
                            <button className="btn bg-white dark:border-none dark:text-[#637307]">All</button>
                            <Link to='/sale'><button className="btn btn-outline">For Sale</button></Link>
                            <Link to='/rent'><button className="btn btn-outline">For Rent</button></Link>
                        </div>
                        <div className="bg-white mt-8 py-4 flex flex-col md:flex-row items-center justify-center gap-8 rounded-lg">
                            <div>
                                <div className="dropdown dropdown-start">
                                    <div tabIndex={0} role="button" className="btn m-1 text-[#637307] flex items-center border-[#637307] dark:bg-white"><span><HiOutlineLocationMarker /></span>City <MdOutlineKeyboardArrowDown /></div>
                                    <ul tabIndex="-1" className="dropdown-content menu text-black bg-base-100 dark:bg-white rounded-box z-1 w-52 p-2 shadow-sm">
                                        <li><a>Mohammadpur</a></li>
                                        <li><a>Gulshan</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div className="dropdown dropdown-start">
                                    <div tabIndex={0} role="button" className="btn m-1 text-[#637307] flex items-center border-[#637307] dark:bg-white">Property type<span><MdOutlineKeyboardArrowDown /></span></div>
                                    <ul tabIndex="-1" className="dropdown-content menu text-black bg-base-100 dark:bg-white rounded-box z-1 w-52 p-2 shadow-sm">
                                        <li><a>Residential</a></li>
                                        <li><a>Commercial</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div className="dropdown dropdown-start">
                                    <div tabIndex={0} role="button" className="btn m-1 text-[#637307] flex items-center border-[#637307] dark:bg-white">Price Range<span><MdOutlineKeyboardArrowDown /></span></div>
                                    <ul tabIndex="-1" className="dropdown-content menu text-black bg-base-100 dark:bg-white rounded-box z-1 w-52 p-2 shadow-sm">
                                        <li><a>50,000</a></li>
                                        <li><a>60,000</a></li>
                                    </ul>
                                </div>
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

export default Banner;