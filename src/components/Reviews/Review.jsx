

const Review = ({ review }) => {
    const { id, img, name, designation, rating, description } = review;
    return (
        <div>
            <div className="card card-border bg-base-100 w-full shadow-2xl">
                <div className="card-body">
                    <div className="flex justify-between">
                        <div className="flex items-center gap-3">
                            <img className="w-14" src={img} alt="" />
                            <div>
                                <h2 className="card-title">{name}</h2>
                                <p>{designation}</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-lg text-amber-500">{rating}</p>
                        </div>
                    </div>
                    <div>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;