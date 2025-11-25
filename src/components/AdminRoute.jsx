import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
    // In a real app, check for valid JWT token
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default AdminRoute;
