import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from '@chakra-ui/react';

// import { Container } from 'components/App/App.styled';
import { Navigation } from 'components/Navigation/Navigation';

import { HomePage } from 'pages/Home';
import { NotFound } from 'pages/NotFound';
import { ContactsPage } from 'pages/Contacts';
import { LoginPage } from 'pages/Login';
import { RegisterPage } from 'pages/Register';
import { fetchCurrentUser } from 'redux/user/userOperation';
import { userSelector } from 'redux/selectors';
import { PrivateRoute } from 'components/PrivateRoute';
import { PublicRoute } from 'components/PublicRoute';

export function App() {
    const dispatch = useDispatch();
    const isFetchingCurrent = useSelector(
        userSelector.selectUserIsFetchingCurrent
    );

    useEffect(() => {
        dispatch(fetchCurrentUser());
    }, [dispatch]);

    return (
        !isFetchingCurrent && (
            <>
                <Navigation />
                <Container>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route
                            path="/contacts"
                            element={
                                <PrivateRoute
                                    to="/login"
                                    element={<ContactsPage />}
                                />
                            }
                        />
                        <Route
                            path="/login"
                            element={
                                <PublicRoute
                                    to="/contacts"
                                    element={<LoginPage />}
                                />
                            }
                        />
                        <Route
                            path="/register"
                            element={
                                <PublicRoute
                                    to="/contacts"
                                    element={<RegisterPage />}
                                />
                            }
                        />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Container>
            </>
        )
    );
}
