import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className="container mx-auto">
            <div className="border-2 border-gray-300 rounded-2xl mt-8 mb-8 px-11 py-11 space-y-4">
                <h1 className="text-2xl font-medium text-center dark:text-black">Register Now</h1>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-xl dark:text-black">Name</legend>
                    <input type="text" className="input w-full dark:bg-white dark:text-[#333333] dark:border-[#cacaca]" placeholder="Enter Your Name" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-xl dark:text-black">Phone Number</legend>
                    <input type="text" className="input w-full dark:bg-white dark:text-[#333333] dark:border-[#cacaca]" placeholder="Enter Your Phone Number" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-xl dark:text-black">Email</legend>
                    <input type="email" className="input w-full dark:bg-white dark:text-[#333333] dark:border-[#cacaca]" placeholder="Enter Your Email" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-xl dark:text-black">Password</legend>
                    <input type="password" className="input w-full dark:bg-white dark:text-[#333333] dark:border-[#cacaca]" placeholder="Enter Your Password" />
                </fieldset>
                <div className="flex items-center">
                    <input type="checkbox" className="checkbox checkbox-sm" />
                    <p className="text-[#585757]">Agree with <Link className="font-medium text-[#637307]" to='/terms'>terms & condition</Link></p>
                </div>
                <button className="btn w-full text-center bg-[#637307] text-white text-xl dark:border-none">Register</button>
                <p className="text-center dark:text-[#333333]">Don’t have an account <Link to='/login' className="text-[#637307] font-medium">Login</Link></p>
            </div>

        </div>
    );
};

export default Register;