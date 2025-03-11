import { useEffect, useState } from "react";
import Blog from "./Blog";


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
                <h1 className="text-2xl font-medium">Blogs</h1>
                <p>See all</p>
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