

const BlogsBanner = () => {
    return (
        <div className="container mx-auto mt-12 ">
            <div
                className="hero h-[234px] rounded-2xl"
                style={{
                    backgroundImage: "url(https://i.ibb.co.com/397Pw3nc/Group-103.png)",
                }}>
                {/* <div className="hero-overlay rounded-2xl"></div> */}
                <div className="hero-content text-neutral-content text-center">
                    <div className="py-8">
                        <div className="space-x-8">
                            <h1 className="text-2xl font-medium">Blogs</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogsBanner;