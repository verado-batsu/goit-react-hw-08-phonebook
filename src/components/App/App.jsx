import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Center, Container } from '@chakra-ui/react';
import { Oval } from 'react-loader-spinner';

import { PrivateRoute } from 'components/PrivateRoute';
import { PublicRoute } from 'components/PublicRoute';
import { fetchCurrentUser } from 'redux/user/userOperation';
import { userSelector } from 'redux/selectors';

import { Navigation } from 'components/Navigation/Navigation';

const HomePage = lazy(() => import('pages/Home'));
const NotFound = lazy(() => import('pages/NotFound'));
const ContactsPage = lazy(() => import('pages/Contacts'));
const LoginPage = lazy(() => import('pages/Login'));
const RegisterPage = lazy(() => import('pages/Register'));

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
                <Suspense
                    fallback={
                        <Center>
                            <Oval
                                height={40}
                                width={40}
                                color="#4fa94d"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                                ariaLabel="oval-loading"
                                secondaryColor="#4fa94d"
                                strokeWidth={2}
                                strokeWidthSecondary={2}
                            />
                        </Center>
                    }
                >
                    <Container centerContent maxW="1200px" padding="0 10px">
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
                </Suspense>
            </>
        )
    );
}
