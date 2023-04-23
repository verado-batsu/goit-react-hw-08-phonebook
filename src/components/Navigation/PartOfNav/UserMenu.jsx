import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { userSelector } from 'redux/selectors';
import { logOut } from 'redux/user/userOperation';

export function UserMenu() {
    const dispatch = useDispatch();
    const { name } = useSelector(userSelector.selectUser);

    function handleClick(e) {
        dispatch(logOut());
    }

    return (
        <div>
            <p>{name && name}</p>
            <Button
                type="button"
                variant="outline-danger"
                size="sm"
                onClick={handleClick}
            >
                Logout
            </Button>
        </div>
    );
}
