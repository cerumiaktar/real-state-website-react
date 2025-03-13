import { useEffect, useState } from "react";
import BlogsBanner from "./BlogsBanner";
import AllBlog from "./AllBlog";


const AllBlogs = () => {
    const [allBlogs, setAllBlogs] = useState([]);

    useEffect(() =>{
        fetch('allblogs.json')
        .then(res=>res.json())
        .then(data=>setAllBlogs(data))
    } ,[])
    return (
        <div>
            <BlogsBanner></BlogsBanner>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container mx-auto gap-8 mt-12 mb-12">
                {
                    allBlogs.map(allBlog =><AllBlog allBlog={allBlog}></AllBlog>)
                }
            </div>
        </div>
    );
};

export default AllBlogs;