import { useContext } from "react";
import { AuthContext } from "./AuthProviders";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({ children }) => {
    const location = useLocation();

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return (
            <div className=' flex items-center justify-center h-screen -mt-20'>
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        )
    }

    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace={true} />;
};

export default PrivateRoutes;