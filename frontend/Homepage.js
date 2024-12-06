import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to the Food Waste Mediator</h1>
      <p>Join us in reducing food waste and helping those in need!</p>
      <div>
        <Link to="/login">Login</Link> | <Link to="/register">Sign Up</Link>
      </div>
    </div>
  );
}

export default HomePage;
