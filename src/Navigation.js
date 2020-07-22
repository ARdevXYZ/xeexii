import React from 'react';
import './App.css';

const siteTitle = "Xeexii";

class Navigation extends React.Component {
  render() {
    return(
      <nav className="main-nav-class" role="navigation">
      <span className="site-title-container">
        <h1 className="site-title-class" alt={siteTitle} title={siteTitle}>{siteTitle}</h1>
      </span>
      </nav>
    );
  }
}

export default Navigation;
