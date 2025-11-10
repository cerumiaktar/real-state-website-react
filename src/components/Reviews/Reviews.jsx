import { useEffect, useState } from "react";
import Review from "./Review";


const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() =>{
        fetch('reviews.json')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    } ,[])
    return (
        <div className="container mx-auto mb-14">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-medium dark:text-black">Client Reviews</h1>
                <p className="dark:text-[#333333]">See all</p>
            </div>
            {
                reviews.map(review =><Review review = {review}></Review>)
            }
        </div>
    );
};

export default Reviews;