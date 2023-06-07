import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import PostComment from './PostComment';
import BlogSidebar from './BlogSidebar';
import Facebook from '../assets/icons/facebook.png'
import Twitter from '../assets/icons/twitter.png'
import Linkedin from '../assets/icons/linkedin.png'

const BlogDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const url = window.location.href;

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/share?url=${url}`);
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`);
  };

  const { slug } = useParams();
  const [blogs, setBlog] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      const response = await fetch(`https://pixxelu.com/dev/red3sixty/api/single-post/${slug}`);
      const data = await response.json();
      setBlog(data.data);
    };
  
    fetchBlog();
  }, [slug]);

  const shareBlog = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
  };

  return (
    <section className="blog-detail">      
        {blogs.map(blog => (
          
          <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="blog-detail-cnt">
                <h1>{blog.title}</h1>
                <img className="post-img" src={blog.image} alt={blog.title} />
                <div className="blog-txt" dangerouslySetInnerHTML={{ __html: blog.description }} />  
                
                <div className="blog-share">
                <h5 className="hdng-h5">Share</h5>
                <button onClick={shareOnFacebook}><img src={Facebook} alt="Facebook" /></button>
                <button onClick={shareOnTwitter}><img src={Twitter} alt="Twitter" /></button>
                <button onClick={shareOnLinkedIn}><img src={Linkedin} alt="Linkedin" /></button>
                </div>

                <div className="blog-comment">
                <h2 className="hdng">Leave a reply</h2>
                <p className="hdng-16">Your email address will not be published. Required fields are marked *</p>
                <PostComment />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="sidebar">
                <BlogSidebar />
              </div>   
            </div>   
          </div>  
          </div>     
          
        ))}      
    </section>
  );
};

export default BlogDetail;
