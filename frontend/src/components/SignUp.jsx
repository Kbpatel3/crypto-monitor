import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (error) {
      console.error(error);
      alert('Error signing up. Please check your email and password.');
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <form onSubmit={handleSignUp} className='flex flex-col space-y-4'>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className='border border-gray-600 rounded px-4 py-2 bg-gray-800 placeholder-gray-400'
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className='border border-gray-600 rounded px-4 py-2 bg-gray-800 placeholder-gray-400'
        />
        <button type="submit" className='px-4 py-2 bg-blue-700 rounded-full hover:bg-blue-500'>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
