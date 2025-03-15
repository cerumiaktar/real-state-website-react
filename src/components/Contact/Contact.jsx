

const Contact = () => {
    return (
        <div >
            <div className="container mx-auto mt-12 ">
                <div
                    className="hero h-[234px] rounded-2xl"
                    style={{
                        backgroundImage: "url(https://i.ibb.co.com/27nQTKpX/Group-104.png)",
                    }}>
                    {/* <div className="hero-overlay rounded-2xl"></div> */}
                    <div className="hero-content text-neutral-content text-center">
                        <div className="py-8">
                            <div className="space-x-8">
                                <h1 className="text-2xl font-medium">Contact Us</h1>
                            </div>
                        </div>
                    </div>
                </div>
                {/* contact field */}
                <div className="border-2 border-gray-300 rounded-2xl mt-8 mb-8 px-11 py-11 space-y-4">
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-xl">Name</legend>
                        <input type="text" className="input w-full" placeholder="Enter Your Name" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-xl">Phone Number</legend>
                        <input type="text" className="input w-full" placeholder="Enter Your Phone Number" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-xl">Email</legend>
                        <input type="text" className="input w-full" placeholder="Enter Your Email" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-xl">Message</legend>
                        <textarea className="textarea w-full" placeholder="Write Your Message"></textarea>
                    </fieldset>
                    <div className="flex items-center">
                        <input type="checkbox" className="checkbox checkbox-sm" />
                        <p className="text-[#585757]"> I consent to having this website store my submitted information</p>
                    </div>
                    <input type="submit" className="input w-full text-center bg-[#637307] text-white text-xl" placeholder="Submit" />
                </div>
                {/* map */}
                <div className="mb-4">
                    <p>Address: Dhaka, Bangladesh <span className="font-medium text-[#637307]">Get Direction</span></p>
                </div>
            </div>

            <img src="https://i.ibb.co.com/wZZb1J3V/Frame-69.png" alt="" />
        </div>
    );
};

export default Contact;