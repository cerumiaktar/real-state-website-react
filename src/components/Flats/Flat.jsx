

const Flat = ({ flat }) => {
    const {img} = flat;
    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <figure className="relative">
                    <div className="carousel rounded-box h-[287px]">
                        <div className="carousel-item w-full ">
                            <img
                                src={img}
                                className="w-full"
                                alt="Tailwind CSS Carousel component" />
                        </div>
                        <div className="carousel-item w-full">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
                                className="w-full"
                                alt="Tailwind CSS Carousel component" />
                        </div>
                        <div className="carousel-item w-full">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
                                className="w-full"
                                alt="Tailwind CSS Carousel component" />
                        </div>
                        <div className="carousel-item w-full">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
                                className="w-full"
                                alt="Tailwind CSS Carousel component" />
                        </div>
                    </div>
                    <div className="flex gap-2 justify-center items-center absolute inset-x-0 bottom-4">
                        <p className="bg-[#637307] w-3 h-3 rounded-full"></p>
                        <p className="bg-[#D9D9D9] w-3 h-3 rounded-full"></p>
                        <p className="bg-[#D9D9D9] w-3 h-3 rounded-full"></p>
                        <p className="bg-[#D9D9D9] w-3 h-3 rounded-full"></p>
                    </div>
                </figure>

                <div className="card-body">
                    <h2 className="card-title">Card Title</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Flat;