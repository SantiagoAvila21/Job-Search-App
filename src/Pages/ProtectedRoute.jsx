import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { authContext } from '../Context/AuthContext';

const ProtectedRoute = ({ user, children }) => {
    const context = useContext(authContext);

    if (!context.auth.logged) {
      return <Navigate to="/login" replace />;
    }
    return children;
};

export default ProtectedRoute;