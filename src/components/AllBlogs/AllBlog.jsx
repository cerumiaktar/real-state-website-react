

const AllBlog = ({ allBlog }) => {
    const{img,title,description} = allBlog;
    return (
        <div className="card bg-base-100 dark:bg-white shadow-sm">
            <figure>
                <img
                    src={img}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title dark:text-black">{title}</h2>
                <p className="text-[#414141] dark:text-[#333333] leading-6">{description}</p>
                <div className="card-actions">
                    <button className="btn bg-[#B4CB21] w-full dark:border-none">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default AllBlog;