import React from 'react';
import { useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(pathname => pathname !== '');

  const crumbs = pathnames.map((pathname, index) => {
    const path = `/${pathnames.slice(0, index + 1).join('/')}`;
    return {
      label: pathname,
      path: path
    };
  });

  return (
    <div className="breadcrumb">
      <div className="container">
        {crumbs.map(crumb => (
          <React.Fragment key={crumb.label}>
            <a href="/">Home</a>
            <span> / </span>
            {crumb.label}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumb;
