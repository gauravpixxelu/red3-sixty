import React from 'react';
import Notfound from '../assets/images/404.png';

const NotFound = () => {
  return (
    <section className="404-block" >
      <img src={Notfound} alt="Notfound"/>
    </section>
  );
};

export default NotFound;