import { LiaBathSolid } from "react-icons/lia";
import { IoBedOutline, IoCarOutline, IoHomeOutline } from "react-icons/io5";

const Flat = ({ flat }) => {
    const { img, title, price, category } = flat;
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

                <div className="card-body text-center">
                    <h2 className="card-title mx-auto">{title}</h2>
                    <p className="text-lg font-medium text-[#637307]">{price}</p>
                    <p>{category}</p>
                    <div className="flex items-center justify-center gap-8 ">
                        <div className="flex items-center gap-2 text-lg font-medium">
                            <p><LiaBathSolid /></p>
                            <p>4</p>
                        </div>
                        <div className="flex items-center gap-2 text-lg font-medium">
                            <p><IoBedOutline /></p>
                            <p>3</p>
                        </div>
                        <div className="flex items-center gap-2 text-lg font-medium">
                            <p><IoCarOutline /></p>
                            <p>1</p>
                        </div>
                        <div className="flex items-center gap-2 text-lg font-medium">
                            <p><IoHomeOutline /></p>
                            <p>1200 m<sup>2</sup> </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Flat;