import { useSelector } from 'react-redux';
import { userSelector } from 'redux/selectors';
import { Nav } from './Navigation.styled';
import { AuthNav } from './PartOfNav/AuthNav';
import { MainNav } from './PartOfNav/MainNav';
import { UserMenu } from './PartOfNav/UserMenu';

export function Navigation() {
    const isLoggedIn = useSelector(userSelector.selectUserIsLoggedIn);

    return (
        <Nav>
            <MainNav />
            {!isLoggedIn && <AuthNav />}
            {isLoggedIn && <UserMenu />}
        </Nav>
    );
}
