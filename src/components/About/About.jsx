

const About = () => {
    return (
        <div className="container mx-auto mt-12 ">
            {/* Banner */}
            <div
                className="hero h-[234px] rounded-2xl"
                style={{
                    backgroundImage: "url(https://i.ibb.co.com/27nQTKpX/Group-104.png)",
                }}>
                {/* <div className="hero-overlay rounded-2xl"></div> */}
                <div className="hero-content text-neutral-content text-center">
                    <div className="py-8">
                        <div className="space-x-8">
                            <h1 className="text-2xl font-medium">About Us</h1>
                        </div>
                    </div>
                </div>
            </div>
            {/* Text */}
            <div>
                <p className="mt-8 leading-8 text-[#414141]">we believe that finding the perfect home or property should be a joyful and fulfilling experience. As a dedicated real estate firm, we specialize in providing comprehensive real estate services to clients looking to buy, sell, or rent properties. Our approach is built on trust, transparency, and a deep commitment to delivering personalized solutions that cater to each client’s unique needs and preferences. <br /><br />

                    We understand that real estate transactions are often among the most significant financial decisions in a person’s life. Whether you are a first-time homebuyer, a seasoned investor, or someone looking for a rental property, our experienced team is here to guide you every step of the way. With years of expertise in the real estate market, we pride ourselves on offering unmatched insights and advice, ensuring you make informed decisions.</p>

                <h1 className="text-xl font-medium text-center">Our Mission</h1>
                <p className="mt-8 leading-8 text-[#414141]">Our mission is to simplify the complex world of real estate for our clients by delivering personalized, transparent, and trustworthy services. We aim to empower every client with the information and support they need to make confident, well-informed real estate decisions. At the heart of our mission is a commitment to building long-term relationships based on mutual trust and respect, ensuring that each client feels valued and understood.<br /><br />

                    We believe that every individual deserves a place to call home, and it is our goal to help you find that special place. From luxury apartments and family homes to commercial properties, we are dedicated to matching our clients with properties that perfectly align with their aspirations and financial goals. We constantly innovate to offer the most efficient and effective solutions, using advanced technology and market insights to enhance our services.</p>
                <h1 className="text-xl font-medium text-center">Our Vision</h1>
                <p className="mt-8 leading-8 text-[#414141]">Our Vision is to simplify the complex world of real estate for our clients by delivering personalized, transparent, and trustworthy services. We aim to empower every client with the information and support they need to make confident, well-informed real estate decisions. At the heart of our mission is a commitment to building long-term relationships based on mutual trust and respect, ensuring that each client feels valued and understood.<br /><br />

                    We believe that every individual deserves a place to call home, and it is our goal to help you find that special place. From luxury apartments and family homes to commercial properties, we are dedicated to matching our clients with properties that perfectly align with their aspirations and financial goals. We constantly innovate to offer the most efficient and effective solutions, using advanced technology and market insights to enhance our services.</p>
            </div>
            {/* expert */}
            <div>
                <div className="flex justify-between items-center mt-6 mb-6">
                    <h1 className="text-2xl font-medium">Meet Our Experts</h1>
                    <p>See all</p>
                </div>
                <div className="mb-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="card bg-base-100 shadow-sm">
                        <figure>
                            <img
                                src="https://i.ibb.co.com/Hfsqb6VY/Rectangle-5.png"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body text-center">
                            <h2 className="card-title mx-auto">Esther Howard</h2>
                            <p>Founder & CEO</p>
                            <div className="card-actions">
                                <button className="btn bg-[#A4BC14] w-full">View Profile</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-sm">
                        <figure>
                            <img
                                src="https://i.ibb.co.com/7xQpVsrr/Rectangle-5-1.png"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body text-center">
                            <h2 className="card-title mx-auto">Gloria Kristin</h2>
                            <p>Founder & CEO</p>
                            <div className="card-actions">
                                <button className="btn bg-[#A4BC14] w-full">View Profile</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-sm">
                        <figure>
                            <img
                                src="https://i.ibb.co.com/Q3s5nJ5x/Rectangle-5-2.png"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body text-center">
                            <h2 className="card-title mx-auto">Jenny Wilson</h2>
                            <p>Founder & CEO</p>
                            <div className="card-actions">
                                <button className="btn bg-[#A4BC14] w-full">View Profile</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-sm">
                        <figure>
                            <img
                                src="https://i.ibb.co.com/xKYW2MdP/Rectangle-5-3.png"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body text-center">
                            <h2 className="card-title mx-auto">Lily Dianne</h2>
                            <p>Founder & CEO</p>
                            <div className="card-actions">
                                <button className="btn bg-[#A4BC14] w-full">View Profile</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;