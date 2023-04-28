import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Card, CardBody, Text, Button, Center } from '@chakra-ui/react';
import { Oval } from 'react-loader-spinner';

import {
    useDeleteContactMutation,
    useFetchContactsQuery,
} from 'redux/contacts/contactsApi';
import { useFilterContacts } from './useFilterContacts';

export function ContactList() {
    const { data, isFetching, error } = useFetchContactsQuery();
    const [deleteContact] = useDeleteContactMutation();

    const filteredContacts = useFilterContacts(data);

    function handleDeleteClick(e) {
        deleteContact(e.target.id);
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
