import React from 'react';
import { useEffect } from 'react';
import BookForm from './BookForm';
import BlogBoxes from './BlogBoxes';
import Breadcrumb from './Breadcrumb';


function Blogs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="blog-page">
    <Breadcrumb />
    <BlogBoxes />
    {/* Book Demo Section Starts */}
    <section className="book-block">
      <div className="container">
        <div className="consulting-hdngs" data-aos="fade-up">
          <h2 className="sec-hdng">Book a Demo today!</h2>
        </div>
        <BookForm />
      </div>
    </section>
    {/* Book Demo Section Ends */}
  </div>
  )
}


export default Blogs