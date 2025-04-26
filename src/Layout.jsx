import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Layout({ children }) {

  return (
    <>
      <div className="cols-arrange">
        <div className="left-col">
          <div className="inner-arrange">
            <p className="text"><Link to="/">Home</Link></p>
            <p className="text"><Link to="/create">Create a mob</Link></p>
            <p className="text"><Link to="/gallery">Gallery</Link></p>
            <div className="gif-box">
              <img src="./spinn.gif" alt="creeper"></img>
            </div>
          </div>
        </div>
        <div className="other-col">
          {children}
         
        </div>
      </div>
    </>
  );
}

export default Layout;