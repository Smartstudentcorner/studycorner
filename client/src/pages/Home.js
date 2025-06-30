import React from 'react';
import logo from '../assets/logo.png';

function Home() {
  return (
    <div className="text-center">
      <h1>Home Page</h1>
      <p>Welcome to our website!</p>
      <img src={logo} alt="Logo" width="150" className="mt-3" />
    </div>
  );
}

export default Home;
