import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BlogSidebar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchPopularPosts = async () => {
      const response = await fetch(
        "https://pixxelu.com/dev/red3sixty/api/all-blogs-list"
      );
      const data = await response.json();
      setBlogs(data.data);
    };

    fetchPopularPosts();
  }, []);

  return (
    <div className="blog-sidebar" data-aos="fade-up">
      
      <h2 className="hdng">Popular Posts</h2>
      <ul>
        {blogs.slice(0, 5).map((blog) => (
          <li key={blog.id}>
            <Link to={`/blogs/${blog.slug}`}>{blog.title}</Link>
            <span>{blog.created_at}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogSidebar;