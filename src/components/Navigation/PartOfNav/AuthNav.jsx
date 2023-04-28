import { NavLink } from 'react-router-dom';

export function AuthNav() {
    return (
        <div>
            <NavLink fontSize="xl" to="/login">
                Login
            </NavLink>
            <NavLink fontSize="xl" to="/register">
                Register
            </NavLink>
        </div>
    );
}
