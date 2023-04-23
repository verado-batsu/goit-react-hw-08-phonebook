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
            <h2>Phonebook</h2>
            <ContactForm />

            <h3>Contacts</h3>
            <Filter />

            <ContactList />
        </div>
    );
}
