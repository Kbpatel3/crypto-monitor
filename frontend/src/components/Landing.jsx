import React from 'react';
import { Link } from 'react-router-dom';

function Landing(){
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-8">Crypto Monitor</h1>
        <div className="space-x-4">
          <Link to="/signin">
            <button className="px-4 py-2 bg-blue-700 rounded hover:bg-blue-500">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="px-4 py-2 bg-green-700 rounded hover:bg-green-500">Sign Up</button>
          </Link>
        </div>
      </div>
    );
  };
  
  export default Landing;