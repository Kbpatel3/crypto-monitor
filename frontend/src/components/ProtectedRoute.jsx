import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
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
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // If user exists, render the protected component (e.g., Dashboard)
  return children;
};

export default ProtectedRoute;