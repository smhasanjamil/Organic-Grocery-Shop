import axios from "axios";
import { useEffect, useState } from "react";

const Blog = () => {
  const [blogs, setblogs] = useState([]);
  useEffect(() => {
    axios.get("https://organic-grocery-shop-backend.vercel.app/blog").then((response) => {
      // console.log(response.data);
      setblogs(response.data);
    });
  }, []);
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs?.map((blog) => (
          <div
            key={blog?.id}
            className="bg-white rounded overflow-hidden max-w-full"
          >
            <img
              src={blog?.image}
              alt="Blog Post 1"
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                {blog?.title}
              </h3>
              <p className="text-gray-500 text-sm text-justify">{blog?.description}</p>
              <p className="text-green-500 text-[13px] font-semibold mt-4">
                {blog?.date}
              </p>
              <a
                href=""
                className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-green-500 hover:bg-green-600 text-white text-[13px]"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
