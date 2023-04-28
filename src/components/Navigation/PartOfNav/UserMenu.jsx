import { useDispatch, useSelector } from 'react-redux';
import { Button, Text } from '@chakra-ui/react';

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
            <Text fontSize="xl">{name && name}</Text>
            <Button
                fontSize="md"
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
