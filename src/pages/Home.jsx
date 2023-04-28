import { useSelector } from 'react-redux';
import { Center, Text } from '@chakra-ui/react';
import { userSelector } from 'redux/selectors';

export default function HomePage() {
    const isLoggedIn = useSelector(userSelector.selectUserIsLoggedIn);
    return (
        <>
            <Center>
                <Text fontSize="4xl">Welcome to Phonebook!</Text>
            </Center>
            {!isLoggedIn && (
                <Center>
                    <Text fontSize="2xl">
                        Please register or log in to use phonebook
                    </Text>
                </Center>
            )}
        </>
    );
}
