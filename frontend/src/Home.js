import React, { useEffect, useState } from 'react';

function Home() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/message')
      .then(res => res.json())
      .then(data => setMsg(data.message));
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <p className="alert alert-info">{msg || 'Loading message...'}</p>
    </div>
  );
}

export default Home;
