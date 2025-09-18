import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="container mx-auto">
            <div className="border-2 border-gray-300 rounded-2xl mt-8 mb-8 px-11 py-11 space-y-4">
                <h1 className="text-2xl font-medium text-center dark:text-black">Login Now</h1>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-xl dark:text-black">Email</legend>
                    <input type="email" className="input w-full dark:bg-white dark:text-[#333333] dark:border-[#cacaca]" placeholder="Enter Your Email" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-xl dark:text-black">Password</legend>
                    <input type="password" className="input w-full dark:bg-white dark:text-[#333333] dark:border-[#cacaca]" placeholder="Enter Your Password" />
                </fieldset>
                <div className="flex items-center justify-end">
                    <p className="text-red-600">Forgot Password</p>
                </div>
                <button className="btn w-full text-center bg-[#637307] text-white text-xl dark:border-none">Login</button>
                <p className="text-center dark:text-[#333333]">Don’t have an account <Link to='/register' className="text-[#637307] font-medium">Register</Link></p>
            </div>
            
        </div>
    );
};

export default Login;