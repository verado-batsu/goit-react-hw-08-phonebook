import { NavLink } from 'react-router-dom';

export function AuthNav() {
    return (
        <div>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
        </div>
    );
}
