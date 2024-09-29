import React, { useEffect, useState } from 'react';
import { auth } from '../firebase'; // Import your Firebase auth instance
import { onAuthStateChanged } from 'firebase/auth';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false); // Stop loading once the auth state is known
    });

    // Clean up the subscription
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading
  }

  // If no user, redirect to login page
  if (!user) {
    return <Navigate to="/login" />;
  }

  // If user exists, render the protected component (e.g., Dashboard)
  return children;
};

export default ProtectedRoute;