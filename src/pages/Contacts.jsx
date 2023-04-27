import { Text } from '@chakra-ui/react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export function ContactsPage() {
    return (
        <div
            style={{
                minWidth: 400,
            }}
        >
            <Text fontSize="3xl">Phonebook</Text>
            <ContactForm />

            <Text fontSize="3xl">Contacts</Text>
            <Filter />

            <ContactList />
        </div>
    );
}
