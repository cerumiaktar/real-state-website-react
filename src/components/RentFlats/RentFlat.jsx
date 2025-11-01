import { LiaBathSolid } from "react-icons/lia";
import { IoBedOutline, IoCarOutline, IoHomeOutline } from "react-icons/io5";


const RentFlat = ({ rentFlat }) => {
    const { img, title, price, category } = rentFlat;
    return (
        <div className="card bg-base-100 dark:bg-white dark:text-black shadow-sm">
                <figure>
                    <img
                        src={img}
                        alt="Shoes" />
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
    );
};

export default RentFlat;