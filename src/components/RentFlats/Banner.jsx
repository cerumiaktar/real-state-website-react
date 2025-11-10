import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiSearchLine } from "react-icons/ri";
import { Link } from "react-router-dom";

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
                            <Link to='/'><button className="btn btn-outline">All</button></Link>
                            <Link to='/sale'><button className="btn btn-outline">For Sale</button></Link>
                            <button className="btn bg-white dark:border-none dark:text-[#637307]">For Rent</button>
                        </div>
                        <div className="bg-white mt-8 py-4 px-8 flex flex-col md:flex-row items-center justify-center gap-8 rounded-lg">
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