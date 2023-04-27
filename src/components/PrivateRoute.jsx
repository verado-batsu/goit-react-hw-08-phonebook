import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { userSelector } from 'redux/selectors';

export function PrivateRoute({ element, to }) {
    const isLoggedIn = useSelector(userSelector.selectUserIsLoggedIn);
    return isLoggedIn ? element : <Navigate to={to} />;
}
