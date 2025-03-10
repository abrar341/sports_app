import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ children }) => {
    const { userInfo } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const location = useLocation(); // ✅ Define location here

    useEffect(() => {
        if (!userInfo || !userInfo.success || !userInfo.data) {
            navigate('/signin', { state: { from: location.pathname } }); // Redirect with previous location
        }
    }, [userInfo, navigate, location]);

    if (!userInfo || !userInfo.data) {
        return null;
    }

    return children;
};

// Prop validation
ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
