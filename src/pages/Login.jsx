import {
    Box,
    Button,
    Center,
    FormControl,
    FormLabel,
    Input,
    Text,
    VStack,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/user/userOperation';

export default function LoginPage() {
    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const user = {
            email: formData.get('email'),
            password: formData.get('password'),
        };
        dispatch(logIn(user));
        e.target.reset();
    }

    return (
        <Box
            border="2px"
            borderColor="gray.200"
            bg="white"
            p={6}
            rounded="md"
            w="400px"
        >
            <Center>
                <Text as="b" fontSize="3xl">
                    Login
                </Text>
            </Center>
            <form onSubmit={handleSubmit}>
                <VStack spacing={4} align="flex-start">
                    <FormControl>
                        <FormLabel>
                            Email address
                            <Input
                                name="email"
                                type="email"
                                placeholder="Enter email"
                            />
                        </FormLabel>
                    </FormControl>

                    <FormControl>
                        <FormLabel>
                            Password
                            <Input
                                name="password"
                                type="password"
                                placeholder="Password"
                            />
                        </FormLabel>
                    </FormControl>

                    <Button colorScheme="purple" type="submit">
                        Submit
                    </Button>
                </VStack>
            </form>
        </Box>
    );
}
