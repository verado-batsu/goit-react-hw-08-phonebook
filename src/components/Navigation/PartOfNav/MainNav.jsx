import { useSelector } from 'react-redux';
import { NavLink as ReachLink } from 'react-router-dom';
import { Link } from '@chakra-ui/react';
import { userSelector } from 'redux/selectors';

export function MainNav() {
    const isLoggedIn = useSelector(userSelector.selectUserIsLoggedIn);
    return (
        <div>
            <Link fontSize="xl" as={ReachLink} to="/">
                Home
            </Link>
            {isLoggedIn && (
                <Link fontSize="xl" as={ReachLink} to="/contacts">
                    Contacts
                </Link>
            )}
        </div>
    );
}
