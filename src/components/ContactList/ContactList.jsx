import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Card, CardBody, Text, Button, Center } from '@chakra-ui/react';

// import { ContactListEl } from 'components/ContactList/ContactList.styled';
import {
    deleteContact,
    fetchContacts,
    useFetchContactsQuery,
} from 'redux/contacts/contactsOperations';
import {
    selectContacts,
    selectError,
    selectFilter,
    selectIsLoading,
} from 'redux/selectors';
import { Oval } from 'react-loader-spinner';

export function ContactList() {
    const dispatch = useDispatch();

    const { data, isFetching, error } = useFetchContactsQuery();

    // useEffect(() => {
    //     dispatch(fetchContacts());
    // }, [dispatch]);

    // const contacts = useSelector(selectContacts);
    // const isLoading = useSelector(selectIsLoading);
    // const error = useSelector(selectError);
    const filter = useSelector(selectFilter);

    const normalizedFilter = filter.toLowerCase();

    const filteredContacts = data
        ? data.filter(contact => {
              return contact.name.toLowerCase().includes(normalizedFilter);
          })
        : [];

    function handleDeleteClick(e) {
        dispatch(deleteContact(e.target.id));
    }

    return (
        <ul>
            {filteredContacts.length > 0 &&
                filteredContacts.map(({ id, name, number }) => {
                    return (
                        <li key={id}>
                            <Card key={id}>
                                <CardBody>
                                    <Text as="b">Name: {name}</Text>
                                    <Text>Number: {number}</Text>
                                </CardBody>
                                <Button
                                    id={id}
                                    colorScheme="red"
                                    type="button"
                                    onClick={handleDeleteClick}
                                >
                                    Delete
                                </Button>
                            </Card>
                        </li>
                    );
                })}
            {isFetching && (
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
            )}
            {error && Notify.failure(error)}
        </ul>
    );
}
