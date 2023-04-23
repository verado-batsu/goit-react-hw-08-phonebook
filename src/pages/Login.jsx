import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/user/userOperation';

export function LoginPage() {
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
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    name="email"
                    type="email"
                    placeholder="Enter email"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    name="password"
                    type="password"
                    placeholder="Password"
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}
