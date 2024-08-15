import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ element: Component, user, requiredRole }) {
  if (user && user.role === requiredRole) {
    return Component;
  } else {
    // Redirect to login or not authorized page if not authenticated or not authorized
    return <Navigate to="/login" />;
  }
}

export default ProtectedRoute;
