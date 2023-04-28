import { Box, Flex, Text } from '@chakra-ui/react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export default function ContactsPage() {
    return (
        <Flex w="100%" gap="5">
            <Box w="50%">
                <Text fontSize="3xl">Phonebook</Text>
                <ContactForm />
            </Box>

            <Box w="50%">
                <Text fontSize="3xl">Contacts</Text>
                <Filter />

                <ContactList />
            </Box>
        </Flex>
    );
}
