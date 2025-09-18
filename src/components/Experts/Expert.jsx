

const Expert = ({ expert }) => {
    const { img, name, designation } = expert;
    return (
        <div>
            <div className="card bg-base-100 dark:bg-white shadow-sm">
                <figure>
                    <img
                        src={img}
                        alt="Shoes" />
                </figure>
                <div className="card-body text-center dark:text-black">
                    <h2 className="card-title mx-auto">{name}</h2>
                    <p>{designation}</p>
                    <div className="card-actions ">
                        <button className="btn bg-[#A4BC14] w-full dark:border-none">View Profile</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Expert;