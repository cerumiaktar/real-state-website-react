import { useEffect, useState } from "react";
import Blog from "./Blog";
import { Link } from "react-router-dom";


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() =>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    } ,[])
    return (
        <div className="container mx-auto mb-14">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-medium dark:text-black">Blogs</h1>
                <Link to='/allBlogs'><p className="dark:text-[#333333]">See all</p></Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8">
                {
                    blogs.map(blog=><Blog blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;