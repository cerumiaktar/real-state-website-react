

const RentContact = () => {
    return (
        <div className="bg-[#7C7884] py-16">
            <div className=" flex flex-col md:flex-row container mx-auto gap-8">
                <div className="bg-[#F5F5F5] rounded-2xl md:w-6/12 p-4 space-y-4">
                    <h1 className="text-2xl font-medium dark:text-black">Contact Us</h1>
                    <input type="text" placeholder="Name" className="input w-full dark:bg-white dark:text-[#333333] dark:border-[#cacaca]" /> <br />
                    <input type="text" placeholder="Email" className="input w-full dark:bg-white dark:text-[#333333] dark:border-[#cacaca]" /><br />
                    <input type="text" placeholder="Message" className="input w-full dark:bg-white dark:text-[#333333] dark:border-[#cacaca]" /><br />
                    <button className="btn w-full bg-[#A4BC14] dark:border-none">Submit</button>
                </div>
                <div className="md:w-6/12">
                    <img className="rounded-2xl" src="https://i.ibb.co.com/jZjthZ44/image-8.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default RentContact;