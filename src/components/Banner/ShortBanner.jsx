

const ShortBanner = () => {
    return (
        <div className="bg-[#7C7884] py-16 mb-14">
            <div className=" flex flex-col md:flex-row container mx-auto gap-8">
                <div className="md:w-6/12">
                    <img src="https://i.ibb.co.com/dStp36g/Frame-19.png" alt="" />
                </div>
                <div className="bg-[#F5F5F5] rounded-2xl md:w-6/12 p-4 space-y-4">
                    <p className="dark:text-[#333333] font-medium">Contact Us</p>
                    <h1 className="text-2xl font-medium dark:text-black">Get Expert Advice Now</h1>
                    <input type="text" placeholder="Name" className="input w-full dark:bg-white dark:text-[#333333] dark:border-[#cacaca]" /> <br />
                    <input type="text" placeholder="Email" className="input w-full dark:bg-white dark:text-[#333333] dark:border-[#cacaca]" /><br />
                    <input type="text" placeholder="Message" className="input w-full dark:bg-white dark:text-[#333333] dark:border-[#cacaca]" /><br />
                    <button className="btn w-full bg-[#A4BC14] dark:border-none">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default ShortBanner;