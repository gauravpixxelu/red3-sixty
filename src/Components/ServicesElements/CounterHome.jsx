import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';

const CounterHome = () => {
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust the threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    }, options);

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <div className="row">
      <div className="col-md-3" ref={counterRef}>
        {isVisible && (
          <div>
            <h3>
              <CountUp end={12} suffix="+" />
            </h3>
            <p className="hdng-18">Over 12 years of Technology Experience</p>
          </div>
        )}
      </div>

      <div className="col-md-3" ref={counterRef}>
        {isVisible && (
          <div>
            <h3>
              <CountUp end={100} suffix="%" />
            </h3>
            <p className="hdng-18">Satisfaction Guaranteed</p>
          </div>
        )}
      </div>

      <div className="col-md-3" ref={counterRef}>
        {isVisible && (
          <div>
            <h3>
              <CountUp end={2500} suffix="+" />
            </h3>
            <p className="hdng-18">Projects Delivered</p>
          </div>
        )}
      </div>

      <div className="col-md-3" ref={counterRef}>
        {isVisible && (
          <div>
            <h3>
              <CountUp end={100} suffix="%" />
            </h3>
            <p className="hdng-18">Confidentiality Assured</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CounterHome;
