import React from 'react';
import Notfound from '../assets/images/404.jpg';

const NotFound = () => {
  return (
    <section className="notfoundblock" >
      <div className="container">
        <img src={Notfound} alt="Notfound" />
      </div>
    </section>
  );
};

export default NotFound;