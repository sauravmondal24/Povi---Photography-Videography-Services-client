import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();

	if (loading) {
		return (
			<>
				<div class="d-flex justify-content-center align-items-center">
					<div class="spinner-border" role="status">
						<span class="visually-hidden">Loading...</span>
					</div>
				</div>
			</>
		);
	}

	if (!user) {
		return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
	}
	return children;
};

export default PrivateRoute;
