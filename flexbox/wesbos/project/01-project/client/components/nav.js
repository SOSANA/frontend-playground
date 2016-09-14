import React from 'react';

export default () => {
  return (
    <div className="wrapper">

      <nav className="flex-nav">
        <ul>
          <li><a href="#">Item 01</a></li>
          <li><a href="#">Item 02</a></li>
          <li><a href="#">Item 03</a></li>
          <li><a href="#">Item 04</a></li>
          <li><a href="#">Item 05</a></li>
          <li><a href="#">Item 06</a></li>
          <li className="social">
            <a href="https://twitter.com/thesosana"><i className="fa fa-twitter"></i></a>
          </li>
          <li className="social">
            <a href="https://www.facebook.com/public/Zach-Sosana"><i className="fa fa-facebook"></i></a>
          </li>
          <li className="social">
            <a href="https://github.com/sosana/"><i className="fa fa-github"></i></a>
          </li>
          <li className="social">
            <a href="https://www.instagram.com/cheechandchong/"><i className="fa fa-instagram"></i></a>
          </li>
        </ul>
      </nav>

    </div>
  );
};
