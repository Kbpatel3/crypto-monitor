import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (error) {
      console.error(error);
      alert('Error signing in. Please check your email and password.');
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <form onSubmit={handleSignIn} className='flex flex-col space-y-4'>
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
        <button type="submit" className='px-4 py-2 bg-blue-700 rounded-full hover:bg-blue-500'>Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
