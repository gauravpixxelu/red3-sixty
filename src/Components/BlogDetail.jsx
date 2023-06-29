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
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}&title=${encodeURIComponent(blogs[0].title)}&picture=${encodeURIComponent(blogs[0].image)}`;
    window.open(shareUrl);
  };

  const shareOnTwitter = () => {
    const shareUrl = `https://twitter.com/share?url=${url}&text=${encodeURIComponent(blogs[0].title)}&hashtags=blog`;
    window.open(shareUrl);
  };

  const shareOnLinkedIn = () => {
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${encodeURIComponent(blogs[0].title)}&summary=${encodeURIComponent(blogs[0].description)}&source=YourWebsiteName`;
    window.open(shareUrl);
  };

  const { slug } = useParams();
  const [blogs, setBlog] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URL}single-post/${slug}`);
      const data = await response.json();
      setBlog(data.data);
    };
  
    fetchBlog();
  }, [slug]);

  // const shareBlog = () => {
  //   const url = window.location.href;
  //   navigator.clipboard.writeText(url);
  // };

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
