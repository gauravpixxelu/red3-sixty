import React, { useState } from 'react';

const PostComment = () => {
  const [author, setAuthor] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [comment, setComment] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const data = { author, email, website, comment };

    try {
      const response = await fetch('https://red3sixtyonlinechatgpt.mbeadmin.com/api/post-comment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const responseData = await response.json();
      console.log(responseData);
      setMessage('Thank you for your Comment. It has been sent.');
      setAuthor('');
      setEmail('');
      setWebsite(''); 
      setComment('');           
    } catch (error) {
      console.log(error);
      setMessage('Message failed to send. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="from-bottom">
      <div className="form-block post-comment">
        <div className="row">
          <div className="col-md-4">
            <div className="form-feild">
              <input type="text" value={author} onChange={e => setAuthor(e.target.value)} placeholder="Your Name" required />
            </div>
          </div>

          <div className="col-md-4">
            <div className="form-feild">
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Your Email" required />
            </div>
          </div>

          <div className="col-md-4">
            <div className="form-feild">
            <input type="text" value={website} onChange={e => setWebsite(e.target.value)} placeholder="Your Website" />
            </div>
          </div>

          <div className="col-md-12">
            <div className="form-feild">
              <textarea type="textarea" value={comment} onChange={e => setComment(e.target.value)} placeholder="Comment" required />
            </div>
          </div>

          <div className="col-md-12">
            <div className="form-button">
              <button type="submit" className="custom-btn"><span>Post Comment</span></button>
              {message && <p className="error-msg">{message}</p>}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PostComment;
