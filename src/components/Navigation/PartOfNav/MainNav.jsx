import { NavLink } from 'react-router-dom';

export function MainNav() {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
        </div>
    );
}
