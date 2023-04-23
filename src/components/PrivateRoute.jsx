import { useSelector } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';
import { userSelector } from 'redux/selectors';

export function PrivateRoute({ element, ...routeProps }) {
    const isLoggedIn = useSelector(userSelector.isLoggedIn);
    return (
        <Route {...routeProps}>
            {isLoggedIn ? element : <Navigate to="/login" />}
        </Route>
    );
}
