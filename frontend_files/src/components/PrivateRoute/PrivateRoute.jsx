import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { useAuth } from "../../context/AuthContext";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return <span className="loading loading-spinner loading-lg m-16"></span>
    }

    if (user) {
        return children;
    }

    return <Navigate to="/signin" replace />;
};

PrivateRoute.propTypes = {
    children: PropTypes.node
};

export default PrivateRoute;
