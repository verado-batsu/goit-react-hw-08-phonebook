import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@chakra-ui/react';

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
                colorScheme="red"
                variant="outline"
                size="sm"
                type="button"
                onClick={handleClick}
            >
                Logout
            </Button>
        </div>
    );
}
