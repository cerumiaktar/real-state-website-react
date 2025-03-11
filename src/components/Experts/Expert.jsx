

const Expert = ({ expert }) => {
    const { img, name, designation } = expert;
    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <img
                        src={img}
                        alt="Shoes" />
                </figure>
                <div className="card-body text-center">
                    <h2 className="card-title mx-auto">{name}</h2>
                    <p>{designation}</p>
                    <div className="card-actions ">
                        <button className="btn bg-[#A4BC14] w-full">View Profile</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Expert;