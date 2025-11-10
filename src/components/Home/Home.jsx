import Banner from "../Banner/Banner";
import ShortBanner from "../Banner/ShortBanner";
import Blogs from "../Blogs/Blogs";
import Experts from "../Experts/Experts";
import Flats from "../Flats/Flats";
import Reviews from "../Reviews/Reviews";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Flats></Flats>
            <ShortBanner></ShortBanner>
            <Experts></Experts>
            <Reviews></Reviews>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;