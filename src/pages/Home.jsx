import React from 'react';

function Home() {
  return (
    <div className="text-center">
      <h1>Welcome to the Home Page</h1>
      <img src={logo} alt="Logo" className="img-fluid mt-3" style={{ maxWidth: '200px' }} />
    </div>
  );
}

export default Home;
