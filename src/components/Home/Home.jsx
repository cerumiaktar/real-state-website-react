import Banner from "../Banner/Banner";
import ShortBanner from "../Banner/ShortBanner";
import Experts from "../Experts/Experts";
import Flats from "../Flats/Flats";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Flats></Flats>
            <ShortBanner></ShortBanner>
            <Experts></Experts>
        </div>
    );
};

export default Home;