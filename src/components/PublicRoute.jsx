import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { userSelector } from 'redux/selectors';

export function PublicRoute({ element, to }) {
    const isLoggedIn = useSelector(userSelector.selectUserIsLoggedIn);
    return isLoggedIn ? <Navigate to={to} /> : element;
}
