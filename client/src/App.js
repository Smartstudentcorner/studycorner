import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/message')
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div className="container text-center mt-5">
      <h1>React + Node Web App</h1>
      <p className="lead text-secondary">{message}</p>
    </div>
  );
}

export default App;
