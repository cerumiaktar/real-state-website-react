

const Review = ({ review }) => {
    const { id, img, name, designation, rating, description } = review;
    return (
        <div>
            <div className="card card-border bg-base-100 w-96">
                <div className="card-body">
                    <div>
                        <img src="" alt="" />
                        <div>
                            <h2 className="card-title">Card Title</h2>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;