

const Blog = ({blog}) => {
    const{img,title,description} = blog;
    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <img
                        src={img}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className="text-[#414141] leading-6">{description}</p>
                    <div className="card-actions">
                        <button className="btn bg-[#B4CB21] w-full">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;