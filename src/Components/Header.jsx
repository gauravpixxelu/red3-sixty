import React from 'react';

function Header() {
  return (

    <header className="site-header">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="/"><img src="images/logo.svg" alt="" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle active" href="/" aria-current="page"> Home </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/about">About</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/benefits">Benefits</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Features</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/overview">Overview</a></li>
                  <li className="nav-item dropend">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Methodology</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="/small-business">Small Business</a></li>
                      <li><a className="dropdown-item" href="/medium-business">Medium Business</a></li>
                      <li><a className="dropdown-item" href="/large-business">Large Business</a></li>
                      <li><a className="dropdown-item" href="/access-to-market">Access to Market</a></li>
                    </ul>
                  </li>
                  <li><a className="dropdown-item" href="/tools">Tools</a></li>
                  <li><a className="dropdown-item" href="/sme-benefits">SME Benefits</a></li>
                  <li><a className="dropdown-item" href="/ultimate-user-guide">Ultimate User Guide</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/pricing">Pricing</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/downloads"> Downloads </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/pdf/introduction-to-redsixty.pdf" target="_blank">Introduction to RED3SIXTY</a></li>
                  <li><a className="dropdown-item" href="/pdf/red3sixty-value-proposition.pdf" target="_blank">RED3SIXTY Value Proposition</a></li>
                  <li><a className="dropdown-item" href="/pdf/three-year-business-plan.pdf" target="_blank">Three Year Business Plan</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Blog</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/contact"> Contact </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/book-online">Book Online</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>

  )
}

export default Header